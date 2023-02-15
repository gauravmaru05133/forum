import { Component, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, ImageBackground, Animated, } from "react-native";
import appStyles from "../../utils/commonStyle";
import Header from "../../componets/header/Header";
import { dateOrTimeFormate, deviceHeight, deviceWidth, fontSizes, imageResize, paddingHorizontal } from "../../utils/variables";
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
import screenName from "../../utils/screenName";
import { navigationToScreen } from "../../utils/navigations";
import AppModal from "../../componets/Modal";
import { Divider } from "react-native-paper";

const mainTabList = [
    { id: 0, title: 'About' },
    { id: 1, title: 'Offer' },
    { id: 2, title: 'Catalogue' },
    { id: 3, title: 'Feed' },
    { id: 4, title: 'Ratings' },
]

const BrandDetails = ({ route }) => {
    const pallaxRef = useRef(null)
    const [loading, setLoading] = useState(true)
    const [retailer, setRetailer] = useState('')
    const [renderScrollHeader, setRenderScrollHeader] = useState(false)
    const [feedLoading, setFeedLoading] = useState(true)
    const [feedList, setFeedList] = useState(true)
    const [rating, setRating] = useState(2)
    const [tab, setTab] = useState(mainTabList)
    const [tabIndex, setTabIndex] = useState(0)
    const [workingTimeModal, setWorkingTimeModal] = useState(false)

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
            setFeedLoading(false)
            if (res?.newsFeedList.length > 0) {
                let newsFeeds = res.newsFeedList.slice(0, 1)
                setFeedList(newsFeeds)
                setFeedLoading(false)
                console.log("fetchRetailersFeed_suces,", newsFeeds)
            } else {
                let clone = tab
                let isFind = tab.findIndex((data) => data.title == 'Feed')
                if (isFind != -1) {
                    clone.splice(isFind, 1)
                }
                // setTab(clone)
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
            let clone = tab


            // let addAbout = {
            //     title: 'About'
            // }
            // cloneTab.push(addAbout)
            if (res?.coupons && res?.coupons.length == 0) {
                let isFindOffer = clone.findIndex((data) => data.title == "Offer")
                if (isFindOffer != -1) {
                    clone.splice(isFindOffer, 1)
                }
                setTab(clone)
            }

            if (res?.retailerCatalogPhotos && res?.retailerCatalogPhotos.length == 0) {
                let isFindOffer = clone.findIndex((data) => data.title == "Catalogue")
                if (isFindOffer != -1) {
                    clone.splice(isFindOffer, 1)
                }
                setTab(clone)
            }

            if (res?.retailerRatings && Object(retailer?.retailerRatings?.averageRating).length == 0) {
                let isFindOffer = clone.findIndex((data) => data.title == "Ratings")
                if (isFindOffer != -1) {
                    clone.splice(isFindOffer, 1)
                }
                setTab(clone)
            }
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
                            style={{ color: colors.black, fontFamily: fonts.MontserratMedium, fontSize: fontSizes.extraExtraSmall, textAlign: 'center', }}
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
                <View style={styles.catalogue_cell_container}>
                    <CommonText
                        text={'3 images'}
                        style={{ color: colors.white, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                    />
                    <CommonText
                        text={item.title}
                        style={styles.catalogue_title}
                    />
                </View>
            </View>
        )
    }

    //switch to feed media details
    const feedMediaDetailClick = (item) => {
        navigationToScreen(screenName.FEED_MEDIA_DETAILS, {
            item: item
        })
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

    // render tab cell
    const renderTabCell = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => setTabIndex(index)}
            >
                <CommonText
                    text={item.title}
                    style={tabIndex == index ? styles.tab_title : styles.tab_un_title}
                />
            </TouchableOpacity>

        )
    }


    const renderWeekOpenCloseUI = ({ item, index }) => {
        return (
            <View style={{
                width: '100%', height: 50, alignContent: 'center',
                justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'
            }}>
                <CommonText
                    text={item.day}
                    style={{ color:  colors.txt_color, fontSize: fontSizes.extraExtraSmall, fontFamily: fonts.MontserratRegular }}
                />
                <CommonText
                    text={item.isActive == 0 ? strings.close : moment(item.openTime, 'HH:mm').format(dateOrTimeFormate.hh_mm_A) + " - " + moment(item.closeTime, 'HH:mm').format(dateOrTimeFormate.hh_mm_A)}
                    style={{ color: item.isActive == 0 ? colors.red : colors.txt_color, fontSize: fontSizes.extraExtraSmall, fontFamily: fonts.MontserratRegular,textTransform:'uppercase' }}
                />
            </View>
        )
    }

    return (
        <View style={appStyles.container}>
            <View style={{ flex: 1 }}>
                <ParallaxScrollView
                    ref={pallaxRef}
                    backgroundColor={colors.white}
                    contentBackgroundColor={colors.white}
                    parallaxHeaderHeight={300}
                    renderFixedHeader={() => {
                        return (
                            <View style={styles.sticky_header_container}>
                                <Header
                                    isInnerScreen={true}
                                    heading={retailer?.about?.retailerName}
                                    profileIconOutline
                                    container={styles.sticky_header}
                                />

                            </View>
                        )
                    }}
                    stickyHeaderHeight={0}
                    scrollEvent={(e) => {
                        // setScrollPosition(e.nativeEvent.contentOffset.y)
                    }}

                    renderForeground={() => (
                        <View style={{ flex: 1 }}>
                            {retailer?.about?.retailerCoverPhotos.length > 0 ?
                                <ImageSlider
                                    data={retailer?.about?.retailerCoverPhotos}
                                    isDetailsEnable={false}
                                    isIndicatorShow={false}
                                    itemWidth={deviceWidth}
                                    itemHeight={350}
                                    isCount
                                />
                                :
                                <AppImage
                                    style={{ width: '100%', height: '100%' }}
                                    source={images.zaraIcon}
                                />}

                        </View>
                    )}>

                    <View style={styles.details_main_container}>
                        <View style={[styles.details_main_container, { marginTop: 10 }]}>

                            <View style={styles.details_child_container}
                            >
                                {loading ? <Loader /> :
                                    <View>
                                        <View style={styles.retailer_about_container}>
                                            <AppImage
                                                style={styles.brand_logo_img}
                                                source={{ uri: retailer?.about?.retailerLogo }}
                                                resizeMode={imageResize.contain}
                                            />
                                            <View style={{ flex: 1, marginLeft: 5 }}>
                                                <CommonText
                                                    text={retailer?.about?.retailerName}
                                                    style={appStyles.heading_txt}
                                                />
                                                <TouchableOpacity style={styles.open_close_container}
                                                    onPress={() => setWorkingTimeModal(true)}
                                                >
                                                    <CommonText
                                                        text={strings.open}
                                                        style={styles.open_close_heading}
                                                    />
                                                    <CommonText
                                                        text={`(till ${moment(retailer?.about?.retailerOpenandCloseTime?.closeTime, 'HH:mm').format('hh:mm a')})`}
                                                        style={styles.open_close_time}
                                                    />
                                                    <SvgComponent
                                                        id={'chevron-down'}
                                                        width={25}
                                                        height={25}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.star_fill_container}>
                                                <View style={styles.start_fill_child_container}>
                                                    <SvgComponent
                                                        id={'star_fill'}
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
                                                        style={styles.about_rating_count_txt}
                                                    />
                                                )}

                                            </View>
                                        </View>
                                        {/* <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <FlatList
                                                data={mainTabList}
                                                style={{ width: '100%', height: 30, }}
                                                ItemSeparatorComponent={() => {
                                                    return <View style={{ justifyContent: 'center', width: '5%' }} />
                                                }}
                                                horizontal={true}
                                                renderItem={renderTabCell}
                                                keyExtractor={(item, index) => index.toString()}
                                            />

                                        </View> */}


                                        <ReadMore
                                            numberOfLines={4}
                                            seeMoreText={strings.read_more}
                                            seeLessText={strings.read_less}
                                            style={styles.cell_des_txt}
                                            seeMoreStyle={styles.readMoreLessTxtStyle}
                                            seeLessStyle={styles.readMoreLessTxtStyle}
                                        >
                                            {
                                                retailer?.about?.retailerDescription
                                                //removeHtmTag(retailer?.about?.retailerDescription)
                                            }
                                        </ReadMore>
                                        <View style={styles.retailer_location_container}>
                                            <SvgComponent
                                                id={'map_pin_outline'}
                                                width={30}
                                                height={30}
                                                iconColor={colors.thinTxt}
                                            />
                                            <CommonText
                                                text={retailer?.about?.shopAddress}
                                                style={styles.retailer_location_txt}
                                                numberOfLines={2}
                                            />
                                        </View>
                                        <View style={[styles.retailer_location_container, { marginTop: 5 }]}>
                                            <SvgComponent
                                                id={'phone_receiver_outline'}
                                                width={30}
                                                height={30}
                                                iconColor={colors.thinTxt}
                                            />
                                            <CommonText
                                                text={getRetailersPhoneToString()}
                                                style={styles.retailer_location_txt}
                                                numberOfLines={2}
                                            />
                                        </View>

                                        {retailer?.retailerCatalogPhotos && retailer?.retailerCatalogPhotos.length > 0 && (
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
                                        )}

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
                                    </View>
                                }

                                {feedLoading ? <Loader /> :
                                    feedList.length > 0 && (
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
                                    )
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
                                        <View style={styles.rating_main_container}>
                                            <View style={styles.avarage_rating_container}>
                                                <CommonText
                                                    text={strings.average_rating}
                                                    style={[styles.cell_des_txt, { marginTop: 0, color: colors.txt_color }]}
                                                    numberOfLines={2}
                                                />

                                                <CommonText
                                                    text={retailer?.retailerRatings?.averageRating}
                                                    style={styles.avarage_rating_counter_txt}
                                                    numberOfLines={3}
                                                />

                                            </View>
                                            <View style={{ width: 1, height: 60, backgroundColor: colors.txt_color }} />
                                            <View style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 20 }}>
                                                <CommonText
                                                    text={retailer?.retailerRatings?.totalRatingsCount}
                                                    style={styles.avarage_total_rating_count_txt}
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

                                <View style={{ width: '100%', marginTop: -30, marginBottom: 30 }}>
                                    <AirbnbRating
                                        onFinishRating={(rat) => setRating(rat)}
                                        style={{ paddingVertical: 10, marginHorizontal: 30, flex: 1 }}
                                        count={5}
                                        reviewSize={1}
                                        size={30}
                                        // ratingContainerStyle={{marginHorizontal:50,justifyContent:'space-between'}}
                                        starContainerStyle={styles.star_rating_container}
                                    />
                                </View>

                                <AppButton
                                    title={strings.add_rating}
                                    disabled
                                />

                                {/* <View style={{ width: deviceWidth, height: 100, marginBottom: 100 }} /> */}

                            </View>
                        </View>
                    </View >

                </ParallaxScrollView >
            </View >
            <AppModal
                isVisible={workingTimeModal}
                container={appStyles.modal_container}
                onBackButtonPress={() => {
                    setWorkingTimeModal(false)
                }}
            >
                <View style={appStyles.modal_child_container}>
                    <View style={styles.modal_heading_container}>
                        <CommonText
                            text={strings.opeaning_time}
                            style={appStyles.modal_title_txt}
                        />

                    </View>
                    <Divider />
                    <FlatList
                        data={retailer?.retailerWeekOpenandCloseTimes}
                        renderItem={renderWeekOpenCloseUI}
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
        </View >
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
        width: deviceWidth * 0.39, height: 220, marginRight: 5,
    },
    sticky_header_container: {
        width: deviceWidth, backgroundColor: colors.white
    },
    sticky_header: {
        height: 60
    },
    details_main_container: {
        backgroundColor: colors.white, marginTop: -40, borderTopLeftRadius: 20, borderTopRightRadius: 20
    },
    details_child_container: {
        flex: 1, paddingHorizontal: paddingHorizontal,
    },
    retailer_about_container: {
        width: '100%', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingVertical: 10
    },
    brand_logo_img: {
        width: 60, height: 60, borderColor: colors.brand_outline, borderWidth: 1, borderRadius: 50,
    },
    open_close_heading: {
        fontFamily: fonts.MontserratSemiBold, color: colors.app_green, fontSize: fontSizes.extraExtraSmall
    },
    open_close_time: {
        fontFamily: fonts.MontserratRegular, color: colors.thinTxt, fontSize: fontSizes.extraExtraSmall, marginLeft: 5
    },
    about_rating_count_txt: {
        color: colors.txt_color, fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall
    },
    retailer_location_container: {
        width: '100%', flexDirection: 'row',
        alignContent: 'center', alignItems: 'center', marginLeft: -8, marginTop: 20
    },
    retailer_location_txt: {
        color: colors.thinTxt, fontSize: fontSizes.extraSmall, paddingRight: 10, lineHeight: 18
    },
    rating_main_container: {
        flexDirection: 'row', height: 100, alignItems: 'center'
    },
    avarage_rating_container: {
        flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center'
    },
    avarage_rating_counter_txt: {
        color: colors.purple, fontFamily: fonts.MontserratBold,
        fontSize: fontSizes.extraLarger, marginLeft: 10
    },
    avarage_total_rating_count_txt: {
        color: colors.purple, fontFamily: fonts.MontserratBold,
        fontSize: fontSizes.extraLarger, marginLeft: 10
    },
    star_rating_container: {
        justifyContent: 'space-between',
        width: deviceWidth * 0.7,
    },
    tab_title: {
        color: colors.txt_color, fontFamily: fonts.MontserratMedium
    },
    tab_un_title: {
        color: colors.tab_unselect, fontFamily: fonts.MontserratMedium
    },
    open_close_container: {
        flexDirection: 'row', alignItems: 'center'
    },
    star_fill_container: {
        justifyContent: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center'
    },
    start_fill_child_container: {
        flexDirection: 'row', alignContent: 'center',
        alignItems: 'center',
    },
    catalogue_cell_container: {
        width: '100%', position: 'absolute', bottom: 0, padding: 10
    },
    catalogue_title: {
        color: colors.white, fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.extraSmall, marginTop: 2, textTransform: 'capitalize'
    },
    modal_heading_container: {
        width: '100%',
    },

})
export default BrandDetails;