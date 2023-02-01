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
import AppButton from "../../componets/button/AppButton";
import FeaturedProducts from "../../componets/featureProducts";
import Header from "../../componets/header/Header";
import HeaderTxt from "../../componets/headingTxt";
import ImageSlider from "../../componets/imageSlider";
import Constant from "../../constant";
import fetureProducts from "../../utils/json/featureProducts";
import strings from "../../utils/strings";
import { deviceWidth, fontSizes, imageResize } from "../../utils/variables";
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
    return (
      <ImageBackground
        source={images.coupanBg}
        style={{ width: '100%', height: 100, marginBottom: 10, paddingVertical: 10 }}
        resizeMode='stretch'
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: '20%', height: '93%' }}>
            <AppImage
              style={{ width: undefined, height: undefined, flex: 1 }}
              source={item.img}
              resizeMode={imageResize.stretch}
            />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <CommonText
              text={item.des}
              style={{
                fontSize: fontSizes.extraSmall, fontFamily: fonts.MontserratSemiBold,
                color: colors.txt_color, paddingRight: 15, lineHeight: 18,flex:1
              }}
            />
            <View style={{ flexDirection: 'row',alignContent:'center',alignItems:'center' }}>
              <SvgComponent
                id={'store'}
                width={25}
                height={25}
                iconColor={'#6C3F99'}
              />
              <CommonText
                text={item.title}
                style={{
                  fontSize: fontSizes.extraExtraSmall, fontFamily: fonts.MontserratRegular,
                  color: '#6C3F99', paddingRight: 15, lineHeight: 18
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }


  return (
    <View style={{ flex: 1 }}>
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
          <View style={{ paddingHorizontal: 20, }}>
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
              style={{ fontFamily: fonts.MontserratBold, fontSize: fontSizes.mediumLarge, color: colors.black }}
            />
            <CommonText
              text={strings.make_shopping_enjoyable}
              style={{
                fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraSmall,
                color: colors.txtGray, marginTop: 4
              }}
            />

            <FlatList
              data={couponsList}
              renderItem={renderFeatureProducts}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>

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
