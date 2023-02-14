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
import strings from "../../utils/strings";
import { deviceHeight, deviceWidth, fontSizes, imageResize } from "../../utils/variables";
import { navigationToScreen } from "../../utils/navigations";
import screenName from "../../utils/screenName";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
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

const FeedTab = ({ navigation }) => {
  const [couponsList, setCoupons] = useState([])
  const [homeScreenInfo, setHomeScreenInfo] = useState('')
  const [loading, setLoading] = useState(true)
  const [feedList, setFeedList] = useState([])
  const [feedTags, setFeedTags] = useState([])

  useEffect(() => {
    console.log("pppppppppp ",Constant.homeBanner)
    fetchFeedTabApi()
  }, []);

  //fetch home screen details
  const fetchFeedTabApi = () => {
    API.getHomeScreen(homeScreenRes, '')
    API.getNewsFeeds(newsFeedListRes, '')
  }

  // home screen info
  const homeScreenRes = {
    success: (res) => {
      console.log("home_Screen_res,", res)
      setHomeScreenInfo(res)
      
    },
    error: (err) => {
      console.log("home_Screen_error,", err)
      setHomeScreenInfo('')
      setLoading(false)
    }
  }

  // newsfeed tab api response
  const newsFeedListRes = {
    success: (res) => {
      console.log("home_Screen_res,", res)
      if (res?.newsFeedList && res?.newsFeedList.length > 0) {
        //let newsFeeds = res?.newsFeedList.slice(0, 6)
        //console.log("feed_lengths >>", newsFeeds.length)
        setFeedList(res?.newsFeedList)
      }
      setFeedTags(res?.tagList)
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
      feedMediaClick={() => feedMediaDetailClick(item)}
    />
  }

  // render feed tags
  const renderFeedTags = ({ item, index }) => {
    return (
      <TouchableOpacity style={{
        marginHorizontal: 5,
        borderColor: colors.txt_color, borderWidth: 1, paddingHorizontal: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center',
      }}>
        <CommonText
          text={item.tagName}
          style={{
            color: colors.txt_color, fontFamily: fonts.MontserratRegular,
            fonSize: fontSizes.extraSmall
          }}
        />
      </TouchableOpacity>
    )
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
              data={Constant.homeBanner}
              isDetailsEnable={false}
              isIndicatorShow={true}
            />

            {
              /**
               * Feed tags
               */
            }
            <View style={{ width: '100%', paddingHorizontal: paddingHorizontal, 
            flexDirection: 'row' ,marginTop:30}}>
              <TouchableOpacity>
                <SvgComponent
                  id='filter'
                />
              </TouchableOpacity>
              <FlatList
                data={feedTags}
                renderItem={renderFeedTags}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />

            </View>

            {/* /
                stay updated UI
              / */}
            <View style={styles.stay_updated_container}>
              <View style={styles.stay_updated_list}>
                <FlatList
                  data={feedList}
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
    paddingHorizontal: paddingHorizontal, paddingBottom: 30, marginTop: 20
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
export default FeedTab;
