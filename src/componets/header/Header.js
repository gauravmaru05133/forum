import { } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import fonts from "../../assets/fonts";
import images from "../../assets/images";
import { deviceWidth, fontSizes } from "../../utils/variables";
import SVGComponent from "../svgIcon/SvgComponent";
import colors from "../../utils/colors";
import CommonText from "../commonText";

const Header = ({
  container,
  heading,
  isShowAppIcon,
  searchIcon,
  notificationIcon,
  profileIcon,
  isInnerScreen,
  onPress,
  isLocationShow,
  profileIconOutline
}) => {
  return (
    <View style={[styles({ isInnerScreen }).mainContainer, container]}>
      {isShowAppIcon && (
        <Image
          style={{ width: 23, height: 23, marginLeft: 3 }}
          source={images.appLogo}
          resizeMode="contain"
        />
      )}

      {isInnerScreen && (
        <SVGComponent id={"chevron_left"} iconColor={colors.black} />
      )}

      {isLocationShow && (
        <View style={{ marginLeft: 10, flex: 1 }}>
          {heading && <CommonText text={heading} style={styles().headingTxt} />}
          <CommonText text={"Bengaluru"} style={[styles().headingTxt, { fontFamily: fonts.MontserratRegular }]} />
        </View>
      )}

      {searchIcon && <SVGComponent id={"search"} iconColor={colors.black} />}
      {notificationIcon && <SVGComponent id={"bell"} iconColor={colors.black} />}
      {profileIconOutline && (
        <SVGComponent id={"profile_outline"} iconColor={colors.black}
        />
      )}
      {profileIcon && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={images.dummyProfileIcon}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = (props = {}) =>
  StyleSheet.create({
    mainContainer: {
      width: deviceWidth,
      height: 75,
      justifyContent: "center",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: props.isInnerScreen ? 3 : 15,
    },
    headingTxt: {
      color: colors.black,
      fontSize: fontSizes.extraSmall,
      fontFamily: fonts.MontserratBold,
    },
    profileIcon: {
      width: 25,
      height: 25,
      marginLeft: 10,
    },
  });
export default Header;
