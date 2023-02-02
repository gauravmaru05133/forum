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
import stayFeed from "../../utils/json/stayFeed";
import { Divider } from "react-native-paper";

const Feed = ({ item, index }) => {
    return (
        <View style={styles.cell_container}>
            <View style={styles.brand_cell_container}>
                <AppImage
                    style={{ width: 40, height: 40 }}
                    source={item.brandIcon}
                />
                <View style={{ flex: 1,marginLeft:10 }}>
                    <CommonText
                        text={item.name}
                        style={{ color: '#262626', fontFamily: fonts.MontserratBold, fontSize: fontSizes.small }}
                    />
                    <View style={{
                        flexDirection: 'row', alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        <CommonText
                            text={item.categories}
                            style={{ color: '#262626', fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                        />
                        <AppImage
                            style={{ width: 4, height: 4, marginHorizontal: 5 }}
                            source={images.dotImg}
                        />
                        <CommonText
                            text={item.categories_2}
                            style={{ color: '#262626', fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                        />
                    </View>


                </View>
            </View>
            {item.bannerImg && (
                <View style={styles.brand_cell_img}>
                    <AppImage
                        style={{ width: undefined, height: undefined, flex: 1 }}
                        source={item.bannerImg}
                        resizeMode={imageResize.cover}
                    />
                </View>
            )}
            {item.tag && (
                <View style={styles.tag_container}>
                    <CommonText
                        text={item.tag}
                        style={styles.tag_txt}
                    />
                </View>
            )}
            <View style={styles.cell_details_container}>
                <CommonText
                    text={item.title}
                    style={styles.cell_title_txt}
                />
                <CommonText
                    text={item.des}
                    style={styles.cell_des_txt}
                />
            </View>

            <Divider />

            <View style={styles.you_like_container}>
                <SvgComponent
                    id={'heart'}
                    iconColor={colors.red}
                    height={30}
                    width={30}
                />
                <CommonText
                    text={item.like}
                    style={styles.you_like_txt}
                />
                <SvgComponent
                    id={'share'}
                    iconColor={colors.red}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cell_container:{
        marginBottom: 40,
    },
    brand_cell_container:{
        width: '100%', height: 50, flexDirection: 'row' 
    },
    brand_cell_img:{
        width: '100%', height: '55%', backgroundColor: 'red' 
    },
    tag_container:{
        backgroundColor: colors.purpleBackground, padding: 5, width: 140,
                    alignContent: 'center', alignItems: 'center', borderRadius: 10, marginVertical: 10
    },
    tag_txt:{
        fontFamily: fonts.MontserratMedium, fontFamily: fonts.MontserratRegular
    },
    cell_details_container:{
        marginVertical: 5
    },
    cell_title_txt:{
        color: colors.black, fontFamily: fonts.MontserratSemiBold,
                        fontSize: fontSizes.extraSmall, lineHeight: 20
    },
    cell_des_txt:{
        color: colors.thinTxt, fontFamily: fonts.MontserratRegular,
                        fontSize: fontSizes.extraSmall, lineHeight: 20,marginTop:5
    },
    you_like_container:{
        flexDirection: 'row', alignContent: 'center', alignItems: 'center'
    },
    you_like_txt:{
        color: colors.black, fontFamily: fonts.MontserratSemiBold,
                         fontSize: fontSizes.extraExtraSmall ,flex:1
    }
})
export default Feed