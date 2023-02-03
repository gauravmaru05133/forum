import {
    View,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { deviceWidth, fontSizes, imageResize } from "../../utils/variables";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import CommonText from "../../componets/commonText";
import colors from "../../utils/colors";
import fonts from "../../assets/fonts";
import images from "../../assets/images";
import AppImage from "../../componets/image/AppImage";

const CouponRewardCell = ({
    item, index, onClick, svgIcon1, svgIcon2, svgIconSize, svgIconColor
}) => {
    return (
        <ImageBackground
            source={images.coupanBg}
            style={styles.imgBackContainer}
            resizeMode='stretch'
        >
            <View style={styles.cellContainer}>
                <View style={styles.imgBackground}>
                    <AppImage
                        style={{ width: undefined, height: undefined, flex: 1 }}
                        source={{uri:item.logo}}
                        resizeMode={imageResize.contain}
                    />
                </View>
                <View style={styles.coupon_details_view}>
                    <CommonText
                        text={item.displayName}
                        style={styles.coupon_des}
                    />
                    <View style={styles.svgIconDetails}>
                        <View style={[styles.svgIconCell, { flex: 1 }]}>
                            <SvgComponent
                                id={svgIcon1 ? svgIcon1 : 'store'}
                                width={svgIconSize ? svgIconSize : 25}
                                height={svgIconSize ? svgIconSize : 25}
                                iconColor={svgIconColor ? svgIconColor : colors.purple}
                            />
                            <CommonText
                                text={item.storeCategory}
                                style={styles.svgTitle}
                            />
                        </View>
                        <View style={styles.svgIconCell}>
                            <SvgComponent
                                id={svgIcon2 ? svgIcon2 : 'store'}
                                width={svgIconSize ? svgIconSize : 25}
                                height={svgIconSize ? svgIconSize : 25}
                                iconColor={svgIconColor ? svgIconColor : '#6C3F99'}
                            />
                            <CommonText
                                text={item.rewardMonetaryValue}
                                style={[styles.svgTitle, styles.svgPrice]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    imgBackContainer: {
        width: '100%', height: 100, marginBottom: 5, paddingVertical: 10
    },
    cellContainer: {
        flex: 1, flexDirection: 'row', paddingHorizontal: 15
    },
    imgBackground: {
        width: '22%', height: '93%'
    },
    coupon_details_view: {
        flex: 1, paddingHorizontal: 15
    },
    coupon_des: {
        fontSize: fontSizes.extraSmall, fontFamily: fonts.MontserratSemiBold,
        color: colors.txt_color, paddingRight: 15, lineHeight: 18, flex: 1
    },
    svgIconDetails: {
        flexDirection: 'row', alignContent: 'center',
        alignItems: 'center',
    },
    svgTitle: {
        fontSize: fontSizes.extraExtraSmall, fontFamily: fonts.MontserratRegular,
        color: colors.purple,
    },
    svgPrice: {
        color: colors.txt_color,
    },
    svgIconCell: {
        flexDirection: 'row', alignItems: 'center', alignContent: 'center'
    }
});
export default CouponRewardCell;
