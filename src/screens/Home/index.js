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
import HeaderTxt from "../../componets/headingTxt";
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


const paddingHorizontal = 20
const Home = ({ navigation }) => {
  const [couponsList, setCoupons] = useState([])


  useEffect(() => {
    Constant.navigation = navigation;
    let couponsClone = fetureProducts.slice(0, 3)
    setCoupons(couponsClone)
  }, []);

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


  return (
    <View style={appStyles.container}>
      <Header onPress={navigateToProfile}
        isShowAppIcon
        searchIcon
        profileIcon
        notificationIcon
      />

      <ScrollView>
        <View style={{}}>
          <ImageSlider
            data={foodImageCatSlider}
            isDetailsEnable={false}
          />
          <View style={{ paddingHorizontal: paddingHorizontal, }}>
            <ElevatedView style={{
              width: '100%', height: 50, flexDirection: 'row',
              backgroundColor: colors.offWhite, alignItems: 'center', borderRadius: 10,
              paddingHorizontal: 5, paddingVertical: 10, marginVertical: 28
            }}>
              <SvgComponent
                id='search'
                width={40}
                height={40}
              />
              <CommonText
                style={{ color: '#7B7B7B', fontFamily: fonts.MontserratRegular, marginLeft: 5 }}
                text={strings.which_store_u_looking_for}
              />
            </ElevatedView>
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

          <View style={{
            width: '100%', height: deviceHeight * 0.6,
            backgroundColor: colors.purpleBackground, marginVertical: 20, padding: 20
          }}>
            <View style={{ flex: 1, backgroundColor: colors.white, }}>
              <View style={{ flex: 1 }}>
                <AppImage
                  style={{ width: undefined, height: undefined, flex: 1 }}
                  source={images.brandBanner}
                  resizeMode={imageResize.contain}
                />
              </View>
              <View style={{ paddingHorizontal:15,alignContent:'center',paddingTop:15 }}>
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

          <View style={{ paddingHorizontal: paddingHorizontal,paddingBottom:30 }}>
            <CommonText
              text={strings.reward_for_you}
              style={appStyles.heading_txt}
            />
            <CommonText
              text={strings.delightful_reward_together}
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
              title={strings.explore_more_rewards}
            />
          </View>

          <ImageSlider
            data={foodImageCatSlider}
            isDetailsEnable={false}
          />

        </View>
      </ScrollView>

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

});
export default Home;
