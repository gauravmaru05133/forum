import {
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { dateOrTimeFormate, deviceHeight, deviceWidth, fontSizes, imageResize } from "../../utils/variables";
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
import appStyles from "../../utils/commonStyle";
import { useEffect, useState } from "react";
import moment from "moment";
import { goBackScreen, navigationToScreen } from "../../utils/navigations";
import Media from "../../componets/Feed/Media";
import screenName from "../../utils/screenName";

const FeedMediaDetails = ({ route }) => {
    const [item, setItem] = useState(route?.params?.item)
    const [isHideTxt, isShowTxt] = useState(false)

    useEffect(() => {
        setItem(route?.params?.item)
        console.log('item_details >>', route?.params?.item)
    }, [])

    const feedMediaClick = (item)=>{
        console.log("llllllllll",item)
        //navigationToScreen(screenName,item)
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.black }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    width: '100%', height: 50,
                    flexDirection: 'row', alignContent: 'center', alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => goBackScreen()}>
                        <SvgComponent
                            id='close'
                            iconColor={colors.white}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, }}>
                    {item.media.length > 0 && (
                        <Media
                            item={item.media}
                            container={{ width: '100%', height: '100%' }}
                            feedMediaClick={feedMediaClick}
                        />
                    )}
                </View>
                <View style={{ width: deviceWidth, height: deviceHeight * 0.2 }} />
                <View style={{
                    width: deviceWidth,
                    alignSelf: 'center', paddingTop: 10, maxHeight: deviceHeight * 0.5, position: 'absolute', bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)', paddingHorizontal: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10
                }}>
                    <CommonText
                        text={`${moment(item?.startDate).format(dateOrTimeFormate.DO_MM_YYYY)} at ${moment(item?.startTime, dateOrTimeFormate.hh_mm_ss).format(dateOrTimeFormate.hh_mm_a)}`}
                        style={{ color: colors.white, fontSize: fontSizes.extraExtraSmall, fontFamily: fonts.MontserratMedium }}
                    />

                    <CommonText
                        text={removeHtmTag(item?.title)}
                        style={{
                            color: colors.white, fontSize: fontSizes.extraSmall,
                            fontFamily: fonts.MontserratSemiBold, marginVertical: 10
                        }}
                    />
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: isHideTxt ? 10 : 10 }}
                    >
                        <ReadMore
                            numberOfLines={2}
                            seeMoreText='Read More'
                            seeLessText="Read Less"
                            style={styles.cell_des_txt}
                            seeMoreStyle={styles.readMoreLessTxtStyle}
                            seeLessStyle={styles.readMoreLessTxtStyle}
                            onCollapse={(val) => isShowTxt(false)}
                            onExpand={() => isShowTxt(true)}
                        >
                            {
                                // removeHtmTag(item?.description)
                                removeHtmTag('dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn dasdadnanda dsabdaksbdasbdasdasd sadasbdasbdhasbdba daslndaslndasd asdandasndanskdd sadnandsnndasndn')
                            }
                        </ReadMore>
                    </ScrollView>

                    <View style={styles.you_like_container}>
                        <SvgComponent
                            id={'heart_outline'}
                            iconColor={colors.white}
                            height={30}
                            width={30}
                        />
                        <CommonText
                            text={`${item?.totalLikes} others liked this`}
                            style={styles.you_like_txt}
                        />
                        <SvgComponent
                            id={'share'}
                            iconColor={colors.white}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cell_des_txt: {
        color: colors.white, fontFamily: fonts.MontserratRegular,
        fontSize: fontSizes.extraSmall, lineHeight: 20, marginTop: 5,
    },
    you_like_container: {
        flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginHorizontal: -10
    },
    you_like_txt: {
        color: colors.white, fontFamily: fonts.MontserratSemiBold,
        fontSize: fontSizes.extraExtraSmall, flex: 1
    },
    readMoreLessTxtStyle: {
        textDecorationLine: 'underline', color: colors.readMoreLessColor, marginLeft: 5
    }
})
export default FeedMediaDetails;