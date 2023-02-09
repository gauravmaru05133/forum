import { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, ImageBackground, } from "react-native";
import appStyles from "../../utils/commonStyle";
import Header from "../../componets/header/Header";
import { deviceHeight, deviceWidth, fontSizes, imageResize, paddingHorizontal } from "../../utils/variables";
import { API } from "../../network/API";
import colors from "../../utils/colors";
import { verticalScale } from "react-native-size-matters";
import AppImage from "../../componets/image/AppImage";
import Loader from "../../componets/Loader";
import CommonText from "../../componets/commonText";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import fonts from "../../assets/fonts";
import moment from "moment";
import strings from "../../utils/strings";
import ReadMore from "@fawazahmed/react-native-read-more";
import { removeHtmTag } from "../../utils/utils";
import ParallaxScrollView from "../../componets/ParallaxScroll";
import images from "../../assets/images";

const BrandDetails = ({ route }) => {
    const [loading, setLoading] = useState(true)
    const [retailer, setRetailer] = useState('')
    const [renderScrollHeader, setRenderScrollHeader] = useState(false)

    useEffect(() => {
        console.log("brand_obj>>", route?.params?.item)
        fetchRetailersDetails()
    }, [])

    // fetch retailers details
    const fetchRetailersDetails = () => {
        API.getRetailersDetails(getRetailersDetailsRes, route?.params?.item?.id)
    }

    const getRetailersDetailsRes = {
        success: (res) => {
            console.log("getRetailersDetails_suces,", res)
            setRetailer(res)
            setLoading(false)
        },
        error: (err) => {
            console.log("getRetailersDetails_errror,", err)
            setRetailer('')
            setLoading(false)
        }
    }

    //generate retailer phone number array string
    const getRetailersPhoneToString = () => {
        if (retailer?.about?.retailerPhoneNumber) {
            let joinStr = retailer?.about?.retailerPhoneNumber.map(item => item.countryCode + '' + item.phoneNumber).join()
            return joinStr
        }
    }

    //renderCatalogPhotosUI
    const renderCatalogPhotosUI = ({ item, index }) => {
        return (
            <ImageBackground style={{ width: 180, height: 230,marginRight:10,}}
                source={images.curtedOfferBg}
                resizeMode={imageResize.stretch}
            >

            </ImageBackground>
        )
    }

    return (
        <View style={appStyles.container}>

            {loading ? <Loader /> :
                <ParallaxScrollView
                    contentContainerStyle={{ flex: 1, backgroundColor: 'blue', height: deviceHeight }}
                    backgroundColor={colors.transplant}
                    parallaxHeaderHeight={300}
                    stickyHeaderHeight={59}
                    onChangeHeaderVisibility={(val) => {
                        setRenderScrollHeader(val)
                    }}
                    renderFixedHeader={() => {
                        return (
                            <View style={{ width: deviceWidth, backgroundColor: colors.white }}>
                                <Header
                                    isInnerScreen={true}
                                    heading="brand"
                                    profileIconOutline
                                    container={{ height: 60 }}
                                />
                            </View>
                        )
                    }}
                    // renderStickyHeader={()=>{
                    //    return <View style={{width:deviceWidth,display:!renderScrollHeader? 'none':'flex',
                    //    backgroundColor:'red',height:50}}/>
                    // }}
                    renderForeground={() => (
                        <TouchableOpacity>
                            <AppImage
                                style={{ width: '100%', height: '100%' }}
                                source={images.zaraIcon}
                            />
                        </TouchableOpacity>
                    )}
                >
                    <View style={{ flex: 1, backgroundColor: colors.white, marginTop: -20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ flex: 1, paddingHorizontal: paddingHorizontal, }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                <AppImage
                                    style={{ width: 60, height: 60, borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 50, }}
                                    source={{ uri: retailer?.about?.retailerLogo }}
                                    resizeMode={imageResize.contain}
                                />
                                <View style={{ flex: 1, marginLeft: 5 }}>
                                    <CommonText
                                        text={retailer?.about?.retailerName}
                                        style={appStyles.heading_txt}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <CommonText
                                            text={strings.open}
                                            style={{ fontFamily: fonts.MontserratSemiBold, color: colors.app_green, fontSize: fontSizes.extraExtraSmall }}
                                        />
                                        <CommonText
                                            text={`(till ${moment(retailer?.about?.retailerOpenandCloseTime?.closeTime, 'HH:mm').format('hh:mm a')})`}
                                            style={{ fontFamily: fonts.MontserratRegular, color: colors.thinTxt, fontSize: fontSizes.extraExtraSmall, marginLeft: 5 }}
                                        />
                                        <SvgComponent
                                            id={'chevron-down'}
                                            width={25}
                                            height={25}
                                        />
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        flexDirection: 'row', alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <SvgComponent
                                            id={'heart_fill'}
                                            width={25}
                                            height={25}
                                            iconColor={colors.purple}
                                        />
                                        <CommonText
                                            text={retailer?.about?.averageRating.toString()}
                                            style={[appStyles.heading_txt, { fontSize: fontSizes.medium }]}
                                        />
                                    </View>
                                    {retailer?.retailerRatings?.totalRatingsCount && (
                                        <CommonText
                                            text={`${retailer?.retailerRatings?.totalRatingsCount} Ratings`}
                                            style={{ color: colors.txt_color, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                                        />
                                    )}

                                </View>
                            </View>
                            <ReadMore
                                numberOfLines={4}
                                seeMoreText={strings.read_more}
                                seeLessText={strings.read_less}
                                style={styles.cell_des_txt}
                                seeMoreStyle={styles.readMoreLessTxtStyle}
                                seeLessStyle={styles.readMoreLessTxtStyle}
                            >
                                {
                                    removeHtmTag(retailer?.about?.retailerDescription + " sbbss sjaJSsa sdjasdjasd asdasdjashdvasdfasdas dasdasdfasvdas dnas dasvdasdas dasdas dasdsadsadsadsadsadfsaugdjksandkjsabkdsajdgasygdsyadasd asdasvjdsajhdsajdhsadnsadsjkabdsa dsakdjbsak dsadgas")
                                }
                            </ReadMore>
                            <View style={{
                                width: '100%', flexDirection: 'row',
                                alignContent: 'center', alignItems: 'center', marginLeft: -8, marginTop: 20
                            }}>
                                <SvgComponent
                                    id={'map_pin_outline'}
                                    width={30}
                                    height={30}
                                    iconColor={colors.thinTxt}
                                />
                                <CommonText
                                    text={retailer?.about?.shopAddress}
                                    style={{ color: colors.thinTxt, fontSize: fontSizes.extraSmall, paddingRight: 10, lineHeight: 18 }}
                                    numberOfLines={2}
                                />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: -8 }}>
                                <SvgComponent
                                    id={'phone_receiver_outline'}
                                    width={30}
                                    height={30}
                                    iconColor={colors.thinTxt}
                                />
                                <CommonText
                                    text={getRetailersPhoneToString()}
                                    style={{ color: colors.thinTxt, fontSize: fontSizes.extraSmall, paddingRight: 10, lineHeight: 18 }}
                                    numberOfLines={2}
                                />
                            </View>

                            <View>
                                <CommonText
                                    text={"Curated Offers"}
                                    style={{ fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.medium, color: colors.txt_color }}
                                />
                                <FlatList
                                    data={retailer?.retailerCatalogPhotos}
                                    renderItem={renderCatalogPhotosUI}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
                    </View>
                </ParallaxScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cell_des_txt: {
        color: colors.thinTxt, fontFamily: fonts.MontserratRegular,
        fontSize: fontSizes.extraSmall, lineHeight: 20, marginTop: 5
    },
    you_like_container: {
        flexDirection: 'row', alignContent: 'center', alignItems: 'center'
    },
    you_like_txt: {
        color: colors.black, fontFamily: fonts.MontserratSemiBold,
        fontSize: fontSizes.extraExtraSmall, flex: 1
    },
    readMoreLessTxtStyle: {
        textDecorationLine: 'underline', color: colors.readMoreLessColor, marginLeft: 5
    }
})
export default BrandDetails;