import {
    View,
    StyleSheet,
    Platform,
} from "react-native";
import { deviceHeight, fontSizes, imageResize } from "../../utils/variables";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import CommonText from "../../componets/commonText";
import colors from "../../utils/colors";
import fonts from "../../assets/fonts";
import images from "../../assets/images";
import AppImage from "../../componets/image/AppImage";
import { Divider } from "react-native-paper";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { removeHtmTag } from "../../utils/utils";
import ReadMore from "@fawazahmed/react-native-read-more";
import Media from "./Media";


const Feed = ({ item, index,feedMediaClick ,mainContainer}) => {
    return (
        <View style={[styles.cell_container,mainContainer]}>
            <View style={styles.brand_cell_container}>
                <AppImage
                    style={{ width: 40, height: 40 }}
                    source={{ uri: item?.retailerDetails?.retailerLogo }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <CommonText
                        text={removeHtmTag(item.title)}
                        style={{ color: '#262626', fontFamily: fonts.MontserratBold, fontSize: fontSizes.small }}
                    />
                    <View style={{
                        flexDirection: 'row', alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        <CommonText
                            text={item?.retailer?.retailerName}
                            style={{ color: '#262626', fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                        />
                        <AppImage
                            style={{ width: 4, height: 4, marginHorizontal: 5 }}
                            source={images.dotImg}
                        />
                        <CommonText
                            text={item?.retailer?.retailerRegisterName}
                            style={{ color: '#262626', fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraExtraSmall }}
                        />
                    </View>
                </View>
            </View>
            {item.media.length > 0 && (
                <Media
                    item={item.media}
                    feedMediaClick={feedMediaClick}
                />
                // <View style={styles.brand_cell_img}>
                //     <AppImage
                //         style={{ width: undefined, height: undefined, flex: 1 }}
                //         source={{uri:item.media[0].thumbnailUrl}}
                //         resizeMode={imageResize.cover}
                //     />
                // </View>
            )}
            {item.tag && (
                <View style={styles.tag_container}>
                    <CommonText
                        text={item?.tag?.tagName}
                        style={styles.tag_txt}
                    />
                </View>
            )}
            <View style={styles.cell_details_container}>
                <CommonText
                    text={removeHtmTag(item.title)}
                    style={styles.cell_title_txt}
                />
                <ReadMore
                    numberOfLines={2}
                    seeMoreText='Read More'
                    seeLessText="Read Less"
                    style={styles.cell_des_txt}
                    seeMoreStyle={styles.readMoreLessTxtStyle}
                    seeLessStyle={styles.readMoreLessTxtStyle}
                >
                    {
                        removeHtmTag(item.description)
                    }
                </ReadMore>
                {/* <CommonText
                    text={removeHtmTag(item.description) }
                    style={styles.cell_des_txt}
                    numberOfLines={3}
                /> */}
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
                    text={`You and ${item?.totalLikes} other like this`}
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
    cell_container: {
        marginBottom: 40,
    },
    brand_cell_container: {
        width: '100%', height: 50, flexDirection: 'row'
    },
    brand_cell_img: {
        width: '100%', height: deviceHeight * 0.35,
    },
    tag_container: {
        backgroundColor: colors.purpleBackground, padding: 5,
        width: verticalScale(Platform.OS == 'ios' ? 123 : 135),
        alignContent: 'center', alignItems: 'center', borderRadius: 10, marginVertical: 10
    },
    tag_txt: {
        fontFamily: fonts.MontserratMedium, fontFamily: fonts.MontserratRegular
    },
    cell_details_container: {
        marginVertical: 5
    },
    cell_title_txt: {
        color: colors.black, fontFamily: fonts.MontserratSemiBold,
        fontSize: fontSizes.extraSmall, lineHeight: 20
    },
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
export default Feed