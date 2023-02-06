import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import FeaturedProducts from "../../componets/featureProducts";
import Header from "../../componets/header/Header";
import ImageSlider from "../../componets/imageSlider";
import Constant from "../../constant";
import fetureProducts from "../../utils/json/featureProducts";
import strings from "../../utils/strings";
import { deviceHeight, deviceWidth, fontSizes, imageResize } from "../../utils/variables";
import { navigationToScreen } from "../../utils/navigations";
import screenName from "../../utils/screenName";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import foodImageCatSlider from "../../utils/json/imageSlider.json";
import ElevatedView from "../../componets/ElevatedView";
import CommonText from "../../componets/commonText";
import colors from "../../utils/colors";
import fonts from "../../assets/fonts";
import images from "../../assets/images";
import AppImage from "../../componets/image/AppImage";
import CouponRewardCell from "../../componets/CoupanRewardCell";
import ExploreMore from "../../componets/ExploreMore";
import appStyles from "../../utils/commonStyle";
import AppButton from "../../componets/AppButton";
import stayFeed from "../../utils/json/stayFeed";
import Feed from "../../componets/Feed";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { API } from "../../network/API";
import Loader from "../../componets/Loader";

const paddingHorizontal = 20
const Home = ({ navigation }) => {
  const [couponsList, setCoupons] = useState([])
  const [homeScreenInfo, setHomeScreenInfo] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Constant.navigation = navigation;
    let couponsClone = fetureProducts.slice(0, 3)
    setCoupons(couponsClone)
    setLoading(true)
    fetchHomeScreenInfo()
  }, []);

  //fetch home screen details
  const fetchHomeScreenInfo = () => {
    API.getHomeScreen(homeScreenRes, '')
  }

  const homeScreenRes = {
    success: (res) => {
      console.log("home_Screen_res,", res)
      setHomeScreenInfo(res)
      setLoading(false)
    },
    error: (err) => {
      console.log("home_Screen_error,", err)
      setHomeScreenInfo('')
      setLoading(false)
    }
  }


  const renderProduct = ({ item, index }) => {
    return <FeaturedProducts item={item} index={index} />;
  };
  const screenSwitchToSurvey = () => {
    navigationToScreen(screenName.SURVEY);
  };

  const navigateToProfile = () => {
    navigationToScreen(screenName.PROFILE);
  };

  //render future products
  const renderFeatureProducts = ({ item, index }) => {
    return <CouponRewardCell
      index={index}
      item={item}
      svgIcon1='store'
      svgIcon2="gold_coin"
    />
  }

//switch to feed media details
  const feedMediaDetailClick = (item)=>{
    navigationToScreen(screenName.FEED_MEDIA_DETAILS,{
      item:item
    })
  }


  //render feed UI
  const renderFeedUI = ({ item, index }) => {
    return <Feed
      item={item}
      index={index}
      feedMediaClick = {()=>feedMediaDetailClick(item)}
    />
  }

  return (
    <View style={appStyles.container}>
      <Header onPress={navigateToProfile}
        profileIconOutline
        notificationIcon
        isShowAppIcon
        isLocationShow
        heading='Forum, Kanakpura Road'
      />
      {loading ? <Loader /> :
        <ScrollView style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>

            {/* /
                Top banner 
              / */}
            <ImageSlider
              data={homeScreenInfo?.banners}
              isDetailsEnable={false}
            />
            <View style={styles.coupon_for_u_container}>
              <ElevatedView style={styles.search_elevation}>
                <SvgComponent
                  id='search'
                  width={40}
                  height={40}
                />
                <CommonText
                  style={styles.search_txt_style}
                  text={strings.which_store_u_looking_for}
                />
              </ElevatedView>

              {/* /
                coupan banner UI
              / */}
              {homeScreenInfo?.coupons?.length > 0 && (
                <View>
                  <CommonText
                    text={strings.coupon_for_you}
                    style={appStyles.heading_txt}
                  />
                  <CommonText
                    text={strings.make_shopping_enjoyable}
                    style={appStyles.thin_sec_title}
                  />
                  <FlatList
                    data={couponsList}
                    renderItem={renderFeatureProducts}
                    style={{ paddingVertical: 20 }}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />

                  <ExploreMore
                    title={strings.explore_more_coupon}
                  />
                </View>
              )}
            </View>

            {/* /
                static banner 
              / */}
            <View style={styles.banner_main_container}>
              <View style={styles.banner_child_white_container}>
                <View style={{ flex: 1 }}>
                  <AppImage
                    style={{ width: undefined, height: undefined, flex: 1 }}
                    source={images.brandBanner}
                    resizeMode={imageResize.cover}
                  />
                </View>
                <View style={styles.banner_info_title_container}>
                  <CommonText
                    text={strings.feature_brands_at_forum}
                    style={appStyles.heading_txt}
                  />
                  <CommonText
                    text={strings.delightful_reward_together}
                    style={appStyles.thin_sec_title}
                  />
                  <AppButton
                    title={strings.view_all}
                  />
                </View>
              </View>
            </View>


            {/* /
                rewards UI
              / */}
            {homeScreenInfo?.rewards?.length > 0 && (
              <View style={styles.reward_for_you_container}>
                <CommonText
                  text={strings.reward_for_you}
                  style={appStyles.heading_txt}
                />
                <CommonText
                  text={strings.delightful_reward_together}
                  style={appStyles.thin_sec_title}
                />
                <FlatList
                  data={homeScreenInfo?.rewards}
                  renderItem={renderFeatureProducts}
                  style={{ paddingVertical: 20 }}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
                <ExploreMore
                  title={strings.explore_more_rewards}
                />
              </View>
            )}

            {/* /
                bottom banner 
              / */}
            {homeScreenInfo?.homeBottom?.length > 0 && (
              <ImageSlider
                data={homeScreenInfo?.homeBottom}
                isDetailsEnable={false}
              />
            )}


            {/* /
                stay updated UI
              / */}
            <View style={styles.stay_updated_container}>
              <CommonText
                text={strings.stay_updated}
                style={appStyles.heading_txt}
              />
              <View style={styles.stay_updated_list}>
                <FlatList
                  data={homeScreenInfo?.newsFeeds}
                  renderItem={renderFeedUI}
                  contentContainerStyle={{ paddingBottom: 250 }}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      }


    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 25,
    marginBottom: 10,
  },
  fetureProductsListContainer: {
    width: deviceWidth,
    height: 100,
  },
  banner_main_container: {
    width: '100%',
    //height: verticalScale(440) ,
    height: deviceHeight * 0.6,

    backgroundColor: colors.purpleBackground, marginVertical: 20, padding: 20
  },
  banner_child_white_container: {
    flex: 1, backgroundColor: colors.white,
  },
  banner_info_title_container: {
    paddingHorizontal: 15, alignContent: 'center', paddingTop: 15
  },
  coupon_for_u_container: {
    paddingHorizontal: paddingHorizontal,
  },
  reward_for_you_container: {
    paddingHorizontal: paddingHorizontal, paddingBottom: 30
  },
  stay_updated_container: {
    paddingHorizontal: paddingHorizontal, paddingBottom: 30, marginTop: 30
  },
  search_elevation: {
    width: '100%', height: 50, flexDirection: 'row',
    backgroundColor: colors.offWhite, alignItems: 'center', borderRadius: 10,
    paddingHorizontal: 5, paddingVertical: 10, marginVertical: 28
  },
  search_txt_style: {
    color: colors.thinTxt, fontFamily: fonts.MontserratRegular, marginLeft: 5
  },
  stay_updated_list: {
    flex: 1, marginTop: 20
  }

});
export default Home;
