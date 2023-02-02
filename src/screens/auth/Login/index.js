import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, TextInput } from "react-native";
import strings from "../../../utils/strings";
import CommonText from "../../../componets/commonText";
import Header from "../../../componets/header/Header";
import ElevatedView from "../../../componets/ElevatedView";
import AppImage from "../../../componets/image/AppImage";
import images from "../../../assets/images";
import fonts from "../../../assets/fonts";
import { DEFAULT_COUNTRY_CODE, deviceHeight, deviceWidth, fontSizes, imageResize, textTransform } from "../../../utils/variables";
import colors from "../../../utils/colors";
import { Slider } from '@miblanchard/react-native-slider';
import SvgComponent from "../../../componets/svgIcon/SvgComponent";
import loyaltyHubList from "../../../utils/json/loyaltyHubList";
import AppButton from "../../../componets/AppButton";
import earnZoneJson from "../../../utils/json/earnZone.json";
import appStyles from "../../../utils/commonStyle";
import Constant from "../../../constant";
import { onlyNumberAllowed, phoneNumberFormate } from "../../../utils/utils";
import DismissKeyboardView from "../../../componets/dismissKeyboard";
import PagerView from 'react-native-pager-view';
import { API } from "../../../network/API";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import AppModal from "../../../componets/Modal";
import { Divider } from "react-native-paper";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";


const Login = ({ navigation }) => {
    const pagerRef = useRef(null)
    const otp1Ref = useRef(null)
    const otp2Ref = useRef(null)
    const otp3Ref = useRef(null)
    const otp4Ref = useRef(null)
    const otp5Ref = useRef(null)
    const otp6Ref = useRef(null)
    const [number, setNumber] = useState('')
    const [page, setPage] = useState(0)
    const [countryCode, setCountryCode] = useState('+91')
    const [otp1, setOtp1] = useState(0)
    const [otp2, setOtp2] = useState(0)
    const [otp3, setOtp3] = useState(0)
    const [otp4, setOtp4] = useState(0)
    const [otp5, setOtp5] = useState(0)
    const [otp6, setOtp6] = useState(0)
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timer, setTimer] = useState()
    const [countryList, setCountryList] = useState([])
    const [isCountryModal, setIsCountryModal] = useState(false)
    const [countryNameStr, setCountryNameStr] = useState('')
    const appConstant = useSelector((state) => state.appConstantReducer.appConstant);


    useEffect(() => {
        Constant.navigation = navigation;
        if (appConstant?.countryCodes) {
            setCountryList(appConstant?.countryCodes)
            let indiaFoundInList = appConstant?.countryCodes.find((item) => item.code == DEFAULT_COUNTRY_CODE)
            setCountryCode(indiaFoundInList)
        }

    }, [])



    useEffect(() => {
        if (page == 1) {
            resendOTP()
        } else {
            setSeconds(0)
            setMinutes(0)
        }
    }, [page])

    // this useeffect for remaining otp
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);
        if (seconds == 0 && minutes == 0) {
            setTimer('')
        } else {
            setTimer((minutes < 10 ? `0${minutes}` : minutes) + " : " + (seconds < 10 ? `0${seconds}` : seconds))
        }
        return () => {
            clearInterval(interval);
        };
    }, [seconds])

    //resend otp
    const resendOTP = () => {
        setSeconds(30)
        setMinutes(0)
    }

    //render country code UI
    const renderCountryNameUI = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                width: '100%', paddingVertical: 15,
                flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25
            }}
                onPress={() => setCountryCode(item)}
            >
                <CommonText
                    text={item.name}
                    style={{
                        fontFamily: fonts.MontserratMedium,
                        fontSize: fontSizes.extraSmall,
                        color: countryCode?.id == item.id ? colors.black : colors.txtGray
                    }}
                />
                <CommonText
                    text={item.code}
                    style={{
                        fontFamily: fonts.MontserratMedium,
                        fontSize: fontSizes.extraSmall,
                        color: countryCode?.id == item.id ? colors.black : colors.txtGray
                    }}
                />
            </TouchableOpacity>
        )
    }

    /**
     * search country by text input
     */
    const onSearchCountry = (txt) => {
        setCountryNameStr(txt)
        let countryClone = appConstant?.countryCodes
        let country = countryClone.filter((item => {
            return item.name.toLowerCase().match(txt.toLowerCase()
            )
        }))
        setCountryList(country)
    }

    //clear modal
    const clearCountryTxt = () => {
        setCountryNameStr('')
        setCountryList(appConstant?.countryCodes)
    }

    return (
        <View style={appStyles.container}>
            <AppImage
                style={styles.login_banner_icons}
                source={images.loginPattern}
                resizeMode={imageResize.cover}
            />
            <DismissKeyboardView style={{ flex: 1 }}>
                <View style={styles.child_container}>
                    <View style={{ width: '100%', alignSelf: 'center', flex: 1 }}>
                        <AppImage
                            style={styles.app_icon_style}
                            source={images.appIcon}
                            resizeMode={imageResize.contain}
                        />
                        <CommonText
                            text={page == 0 ? strings.enter_ur_mobile_to_continue : strings.enter_otp}
                            style={styles.heading_txt}
                        />

                        <PagerView
                            ref={pagerRef}
                            style={{ flex: 1 }}
                            initialPage={page}
                            scrollEnabled={false}
                            onPageSelected={(page) => setPage(page.nativeEvent.position)}
                        >
                            {/**
                             *  page 0 UI 
                             * login UI starts here
                             */}
                            <View style={styles.input_container}>
                                <TouchableOpacity style={styles.country_input_container}
                                    onPress={() => setIsCountryModal(true)}
                                >
                                    <CommonText
                                        text={countryCode?.code ? countryCode?.code : "Select Country"}
                                        style={styles.input_txt_style}
                                    />
                                    {countryCode?.code && (
                                        <SvgComponent
                                            id="3.9"
                                            width={35}
                                            height={35}
                                        />
                                    )}

                                </TouchableOpacity>
                                <View style={styles.divider} />
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                        style={[styles.input_txt_style, { paddingHorizontal: 15 }]}
                                        placeholder={strings.your_mobile_number}
                                        keyboardType='numeric'
                                        maxLength={10}
                                        value={number}
                                        onChangeText={(txt) => setNumber(onlyNumberAllowed(txt))}
                                    />
                                </View>
                            </View>
                            {/**
                             * login UI end here
                             */}


                            {/**
                             * page 1 UI
                             * OTP UI Start here
                             */}
                            <View style={{}}>
                                <View style={styles.otp_view_details_container}>
                                    <CommonText
                                        text={strings.sent_to}
                                        style={styles.otp_heading_txt_style}
                                    />
                                    <TouchableOpacity style={styles.phone_number_pen_container}
                                        onPress={() => pagerRef.current.setPage(0)}
                                    >
                                        <CommonText
                                            text={`${countryCode} ${phoneNumberFormate(number)}`}
                                            style={styles.otp_value_txt_style}
                                        />
                                        <SvgComponent
                                            id={'pen'}
                                            width={22}
                                            height={22}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.otp_child_cell_input_container}>
                                    <TextInput
                                        ref={otp1Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp1}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp1(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                                otp2Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        maxLength={1}
                                        onSubmitEditing={() => { otp2Ref.current.focus() }}
                                    />

                                    <TextInput
                                        ref={otp2Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp2}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp2(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                                otp3Ref.current.focus()
                                            } else {
                                                otp1Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        maxLength={1}
                                        onSubmitEditing={() => { otp3Ref.current.focus() }}
                                    />

                                    <TextInput
                                        ref={otp3Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp3}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp3(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                                otp4Ref.current.focus()
                                            } else {
                                                otp2Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        maxLength={1}
                                        onSubmitEditing={() => { otp4Ref.current.focus() }}
                                    />

                                    <TextInput
                                        ref={otp4Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp4}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp4(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                                otp5Ref.current.focus()
                                            } else {
                                                otp3Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        maxLength={1}
                                        onSubmitEditing={() => { otp5Ref.current.focus() }}
                                    />

                                    <TextInput
                                        ref={otp5Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp5}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp5(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                                otp6Ref.current.focus()
                                            } else {
                                                otp4Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="next"
                                        maxLength={1}
                                        onSubmitEditing={() => { otp6Ref.current.focus() }}
                                    />

                                    <TextInput
                                        ref={otp6Ref}
                                        style={styles.otp_input_style}
                                        placeholder="0"
                                        value={otp6}
                                        numberOfLines={1}
                                        onChangeText={(value) => {
                                            setOtp6(onlyNumberAllowed(value))
                                            if (value.length > 0) {
                                            } else {
                                                otp5Ref.current.focus()
                                            }
                                        }}
                                        keyboardType='number-pad'
                                        returnKeyType="done"
                                        maxLength={1}
                                        onSubmitEditing={() => { }}
                                    />
                                </View>
                                {timer ?
                                    <View style={styles.otp_view_details_container}>
                                        <CommonText
                                            text={strings.resend_otp}
                                            style={[styles.otp_heading_txt_style, { textTransform: textTransform.none }]}
                                        />
                                        <CommonText
                                            text={timer}
                                            style={styles.otp_value_txt_style}
                                        />
                                    </View>
                                    :
                                    <TouchableOpacity style={[styles.otp_view_details_container, { marginLeft: -6 }]}
                                        onPress={() => resendOTP(0)}
                                    >
                                        <SvgComponent
                                            id={'reload'}
                                            width={25}
                                            height={25}
                                        />
                                        <CommonText
                                            text={strings.resend_otp}
                                            style={[styles.otp_value_txt_style, { textTransform: textTransform.none, marginLeft: 2 }]}
                                        />
                                    </TouchableOpacity>
                                }
                            </View>
                            {/**     
                             * OTP UI end here
                             */}
                        </PagerView>

                    </View>
                    {/* <View style={{ flex: 1 }} /> */}
                    <View style={{}}>
                        <AppButton
                            style={styles.action_btn}
                            isIconRight
                            disabled={number.length > 9 ? false : true}
                            title={page == 0 ? strings.verify_mobile : strings.verify_otp}
                            actionClick={() => pagerRef.current.setPage(1)}
                        />
                    </View>
                </View>
            </DismissKeyboardView>
            <AppModal
                isVisible={isCountryModal}
                container={appStyles.modal_container}
                onBackButtonPress={() => {
                    setIsCountryModal(false)
                    clearCountryTxt()
                }}
            >
                <View style={appStyles.modal_child_container}>
                    <View style={styles.modal_heading_container}>
                        <CommonText
                            text={strings.select_country}
                            style={appStyles.modal_title_txt}
                        />
                        <View style={styles.modal_search_container}>
                            <SvgComponent
                                width={30}
                                height={30}
                            />
                            <TextInput
                                style={styles.modal_txt_input}
                                placeholder={strings.which_country_are_u_looking}
                                value={countryNameStr}
                                onChangeText={(txt) => onSearchCountry(txt)}
                            />
                        </View>
                    </View>
                    <Divider />
                    <FlatList
                        data={countryList}
                        renderItem={renderCountryNameUI}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => {
                            return <Divider />
                        }}
                    />
                </View>
            </AppModal>
        </View>
    )
}
const styles = StyleSheet.create({
    input_txt_style: {
        color: colors.black, fontSize: fontSizes.small, fontFamily: fonts.MontserratMedium
    },
    divider: {
        height: 50, width: 1, backgroundColor: colors.txtGray
    },
    heading_txt: {
        color: colors.black, fontFamily: fonts.TFArrowBold, lineHeight: 38,
        fontSize: 35
    },
    child_container: {
        flex: 1, width: deviceWidth * 0.9, alignSelf: 'center'
    },
    app_icon_style: {
        width: deviceWidth * 0.4, height: 100, marginBottom: 20, alignSelf: 'center'
    },
    login_banner_icons: {
        width: '100%', height: 250, position: 'absolute', bottom: 0
    },
    input_container: {
        width: '100%', height: 50, borderColor: colors.txtGray,
        borderWidth: 1, flexDirection: 'row', marginTop: 10
    }, country_input_container: {
        flex: 0.3, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'
    },
    action_btn: {
        width: '100%', height: 50
    },
    otp_main_container: {
        width: '100%',

    },
    otp_input_style: {
        width: 50, height: 50, borderColor: colors.txtGray, borderWidth: 1,
        fontFamily: fonts.MontserratRegular, textAlign: 'center', fontSize: fontSizes.small,
        textAlignVertical: 'center', alignSelf: 'center', alignItems: 'center', alignContent: 'center'
    },
    otp_view_details_container: {
        flexDirection: 'row', alignContent: 'center',
        alignItems: 'center', marginTop: 3
    },
    otp_heading_txt_style: {
        textTransform: textTransform.lowercase, fontFamily: fonts.MontserratMedium, color: colors.txtGray,
        fontSize: fontSizes.extraSmall
    },
    otp_value_txt_style: {
        textTransform: textTransform.lowercase,
        fontFamily: fonts.MontserratSemiBold, color: colors.txt_color,
        fontSize: fontSizes.extraSmall, marginLeft: 5
    }, phone_number_pen_container: {
        flexDirection: 'row', alignContent: 'center', alignItems: 'center'
    },
    otp_child_cell_input_container: {
        width: '100%', height: 50, flexDirection: 'row',
        justifyContent: 'space-between', marginVertical: 10
    },modal_heading_container: {
        width: '100%', paddingHorizontal: 20, paddingBottom: 15
    },
    modal_search_container: {
        width: '100%', height: 40, backgroundColor: colors.offWhite,
        flexDirection: 'row', alignContent: 'center', alignItems: 'center', paddingHorizontal: 5
    }, modal_txt_input: {
        flex: 1, paddingHorizontal: 10, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraSmall, color: colors.txt_color
    }
})
export default Login