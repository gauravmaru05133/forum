import { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, ImageBackground, Animated, } from "react-native";
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
import DashedLine from "../../componets/DashedLine";
import LinearGradient from "react-native-linear-gradient";
import ImageSlider from "../../componets/imageSlider";
import Feed from "../../componets/Feed";
import { Rating, AirbnbRating } from 'react-native-ratings';
import AppButton from "../../componets/AppButton";


const BrandDetails = ({ route }) => {
    const [loading, setLoading] = useState(false)
    const [retailer, setRetailer] = useState('')
    const [renderScrollHeader, setRenderScrollHeader] = useState(false)
    const [feedLoading, setFeedLoading] = useState(true)
    const [feedList, setFeedList] = useState(true)
    const [rating, setRating] = useState(2)

    useEffect(() => {
        console.log("brand_obj>>", route?.params?.item)
        fetchRetailersDetails()
        fetchRetailersFeed()
    }, [])

    //fetch retailers feed
    const fetchRetailersFeed = () => {
        let data = `?retailer=${route?.params?.item.id}`
        API.getNewsFeeds(newsFeedListRes, data)
    }

    const newsFeedListRes = {
        success: (res) => {
            console.log("fetchRetailersFeed_suces,", res)
            if (res?.newsFeedList.length > 0) {
                let newsFeeds = res.newsFeedList.slice(0, 1)
                setFeedList(newsFeeds)
                setFeedLoading(false)
                console.log("fetchRetailersFeed_suces,", newsFeeds)
            }
        },
        error: (err) => {
            console.log("fetchRetailersFeed_errror,", err)
            setFeedList([])
            setFeedLoading(false)
        }
    }

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

    //render Curated Coupons UI
    const renderCuratedCoupons = ({ item, index }) => {
        return (
            <ImageBackground style={styles.coupons_main_container}
                source={images.curtedOfferBg}
                resizeMode={imageResize.stretch}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <AppImage
                            style={{
                                width: 50, height: 50, borderColor: '#D9D9D9',
                                borderWidth: 1, borderRadius: 50, alignSelf: 'center',
                            }}
                            source={{ uri: retailer?.about?.retailerLogo }}
                            resizeMode={imageResize.contain}
                        />
                        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: 2 }}>
                            <SvgComponent
                                id={'store'}
                                width={25}
                                height={25}
                                iconColor={colors.purple}
                            />
                            <CommonText
                                text={"Zara"}
                                style={{ color: colors.purple, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                            />
                        </View>
                        <CommonText
                            text={"Christmas Special! Get 15% off on your next order "}
                            style={{ color: colors.black, fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.extraSmall, textAlign: 'center', }}
                            numberOfLines={3}
                        />
                    </View>
                    <View style={{ flex: 0.35, marginBottom: 2, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, paddingHorizontal: 20, }}>
                            <DashedLine
                                dashLength={10} dashThickness={1}
                                dashColor={'#C4C4C4'}
                                style={{ width: '100%' }}
                            />
                            <View style={{
                                flexDirection: 'row', alignContent: 'center',
                                alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: 5
                            }}>
                                <SvgComponent
                                    id={'gold_coin'}
                                    width={30}
                                    height={30}
                                />
                                <CommonText
                                    text={'5000'}
                                    style={{ color: colors.txt_color, fontSize: fontSizes.extraSmall, fontFamily: fonts.MontserratSemiBold }}
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )
    }

    //render catalogue cell UI
    const renderCatalogueCell = ({ item, index }) => {
        return (
            <View style={styles.coupons_main_container}>
                <AppImage
                    style={{ width: undefined, height: undefined, flex: 1 }}
                    source={{ uri: item.thumbnail }}
                    resizeMode={imageResize.cover}
                />
                <LinearGradient
                    style={[styles.coupons_main_container, { position: 'absolute', }]}
                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
                />
                <View style={{ width: '100%', position: 'absolute', bottom: 0, padding: 10 }}>
                    <CommonText
                        text={'3 images'}
                        style={{ color: colors.white, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                    />
                    <CommonText
                        text={item.title}
                        style={{ color: colors.white, fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.extraSmall, marginTop: 2, textTransform: 'capitalize' }}
                    />
                </View>
            </View>
        )
    }


    //render feed UI
    const renderFeedUI = ({ item, index }) => {
        return <Feed
            item={item}
            index={index}
            mainContainer={{ marginBottom: 0 }}
            feedMediaClick={() => feedMediaDetailClick(item)}
        />
    }


    return (
        <View style={appStyles.container}>
            {loading ? <Loader /> :
                <View style={{ flex: 1 }}>
                    <ParallaxScrollView
                        backgroundColor={colors.white}
                        contentBackgroundColor={colors.white}
                        parallaxHeaderHeight={300}
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
                        renderForeground={() => (
                            <View style={{ flex: 1 }}>
                                {retailer?.about?.retailerCoverPhotos ?
                                    <ImageSlider
                                        data={retailer?.about?.retailerCoverPhotos}
                                        isDetailsEnable={false}
                                        isIndicatorShow={false}
                                        itemWidth={deviceWidth}
                                        itemHeight={350}
                                    />
                                    :
                                    <AppImage
                                        style={{ width: '100%', height: '100%' }}
                                        source={images.zaraIcon}
                                    />}

                            </View>
                        )}>
                        <View style={{ backgroundColor: colors.white, marginTop: -40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
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

                                <View style={styles.child_heading_view}>
                                    <CommonText
                                        text={strings.curatedCoupons}
                                        style={styles.heading_txt}
                                    />
                                    <FlatList
                                        data={retailer?.retailerCatalogPhotos}
                                        renderItem={renderCuratedCoupons}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>

                                {retailer?.retailerCatalogPhotos && retailer?.retailerCatalogPhotos.length > 0 && (
                                    <View style={styles.child_heading_view}>
                                        <CommonText
                                            text={strings.catalogue}
                                            style={styles.heading_txt}
                                        />
                                        <FlatList
                                            data={retailer?.retailerCatalogPhotos}
                                            renderItem={renderCatalogueCell}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                            keyExtractor={(item, index) => index.toString()}
                                        />
                                    </View>
                                )}

                                {feedLoading ? <Loader /> :
                                    <View style={styles.child_heading_view}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <CommonText
                                                text={strings.feed}
                                                style={[styles.heading_txt, { flex: 1 }]}
                                            />
                                            <CommonText
                                                text={strings.view_all}
                                                style={appStyles.view_all_txt}
                                            />
                                            <SvgComponent
                                                id={'chevron-right'}
                                                width={22}
                                                height={22}
                                            />
                                        </View>

                                        <View style={styles.stay_updated_list}>
                                            <FlatList
                                                data={feedList}
                                                renderItem={renderFeedUI}
                                                keyExtractor={(item, index) => index.toString()}
                                                showsVerticalScrollIndicator={false}
                                                showsHorizontalScrollIndicator={false}
                                                scrollEnabled={false}
                                            />
                                        </View>
                                    </View>
                                }


                                {retailer?.retailerRatings?.averageRating && Object(retailer?.retailerRatings?.averageRating).length != 0 && (
                                    <View style={styles.child_heading_view}>
                                        <CommonText
                                            text={strings.ratings}
                                            style={[styles.heading_txt, { flex: 1 }]}
                                        />
                                        <CommonText
                                            text={strings.ratings_msg}
                                            style={[styles.cell_des_txt, { marginTop: -10 }]}
                                            numberOfLines={3}
                                        />
                                        <View style={{ flexDirection: 'row', height: 100, alignItems: 'center' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                                <CommonText
                                                    text={strings.average_rating}
                                                    style={[styles.cell_des_txt, { marginTop: 0, color: colors.txt_color }]}
                                                    numberOfLines={2}
                                                />

                                                <CommonText
                                                    text={retailer?.retailerRatings?.averageRating}
                                                    style={{
                                                        color: colors.purple, fontFamily: fonts.MontserratBold,
                                                        fontSize: fontSizes.extraLarger, marginLeft: 10
                                                    }}
                                                    numberOfLines={3}
                                                />

                                            </View>
                                            <View style={{ width: 1, height: 60, backgroundColor: colors.txt_color }} />
                                            <View style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 20 }}>
                                                <CommonText
                                                    text={retailer?.retailerRatings?.totalRatingsCount}
                                                    style={{
                                                        color: colors.purple, fontFamily: fonts.MontserratBold,
                                                        fontSize: fontSizes.extraLarger, marginLeft: 10
                                                    }}
                                                    numberOfLines={3}
                                                />

                                                <CommonText
                                                    text={strings.average_rating}
                                                    style={[styles.cell_des_txt, { marginTop: 0, color: colors.txt_color }]}
                                                    numberOfLines={2}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                )}

                                <View style={{ width: '100%', marginTop:-30,marginBottom:30}}>
                                    <AirbnbRating
                                        onFinishRating={(rat) => setRating(rat)}
                                        style={{ paddingVertical: 10, marginHorizontal: 30, flex: 1 }}
                                        count={5}
                                        reviewSize={0}
                                        size={30}
                                        // ratingContainerStyle={{marginHorizontal:50,justifyContent:'space-between'}}
                                        starContainerStyle={{
                                            justifyContent: 'space-between',
                                            width: deviceWidth * 0.7,
                                        }}
                                    />
                                </View>

                                <AppButton
                                    title={strings.add_rating}
                                    disabled
                                />

                                {/* <View style={{ width: deviceWidth, height: 100, marginBottom: 100 }} /> */}

                            </View>
                        </View>
                    </ParallaxScrollView>
                </View>

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
    },
    child_heading_view: {
        marginVertical: 20
    },
    heading_txt: {
        fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.medium,
        color: colors.txt_color, marginBottom: 15
    },
    stay_updated_list: {
        marginTop: 20,
    },
    coupons_main_container: {
        width: deviceWidth * 0.4, height: 200, marginRight: 10,
    }
})
export default BrandDetails;