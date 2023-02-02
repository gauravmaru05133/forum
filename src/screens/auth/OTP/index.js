import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, TextInput } from "react-native";
import strings from "../../../utils/strings";
import CommonText from "../../../componets/commonText";
import Header from "../../../componets/header/Header";
import ElevatedView from "../../../componets/ElevatedView";
import AppImage from "../../../componets/image/AppImage";
import images from "../../../assets/images";
import fonts from "../../../assets/fonts";
import { deviceHeight, deviceWidth, fontSizes, imageResize, textTransform } from "../../../utils/variables";
import colors from "../../../utils/colors";
import { Slider } from '@miblanchard/react-native-slider';
import SvgComponent from "../../../componets/svgIcon/SvgComponent";
import loyaltyHubList from "../../../utils/json/loyaltyHubList";
import AppButton from "../../../componets/AppButton";
import earnZoneJson from "../../../utils/json/earnZone.json";
import appStyles from "../../../utils/commonStyle";
import Constant from "../../../constant";
import { onlyNumberAllowed } from "../../../utils/utils";
import DismissKeyboardView from "../../../componets/dismissKeyboard";


const OTP = ({ navigation }) => {
    const [number, setNumber] = useState('')

    useEffect(() => {
        Constant.navigation = navigation;
    }, [])

    return (
        <View style={appStyles.container}>
            <AppImage
                style={styles.login_banner_icons}
                source={images.loginPattern}
                resizeMode={imageResize.cover}
            />
            <DismissKeyboardView>
                <View style={styles.child_container}>
                    <View style={{ width: '100%', alignSelf: 'center' }}>
                        <AppImage
                            style={styles.app_icon_style}
                            source={images.appIcon}
                            resizeMode={imageResize.contain}
                        />
                        <CommonText
                            text={strings.enter_ur_mobile_to_continue}
                            style={styles.heading_txt}
                        />
                        <View style={styles.input_container}>
                            <View style={styles.country_input_container}>
                                <CommonText
                                    text={'+91'}
                                    style={styles.input_txt_style}
                                />
                                <SvgComponent
                                    id="3.9"
                                    width={35}
                                    height={35}
                                />
                            </View>
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
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{}}>
                        <AppButton
                            style={styles.action_btn}
                            isIconRight
                            disabled={number.length > 9 ? false : true}
                            title={strings.verify_mobile}
                            actionClick={() => console.log("")}
                        />
                    </View>
                </View>
            </DismissKeyboardView>
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
    input_container:{
        width: '100%', height: 50, borderColor: colors.txtGray, borderWidth: 1, flexDirection: 'row', marginTop: 10 
    },country_input_container:{
        flex: 0.3, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'
    },
    action_btn:{
        width: '100%', height: 50
    }
})
export default OTP