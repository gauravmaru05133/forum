import {} from "react";
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
  onPress
}) => {
  return (
    <View style={[styles({ isInnerScreen }).mainContainer, container]}>
      {isInnerScreen && (
        <TouchableOpacity
        onPress={isInnerScreen  }
        >
<SVGComponent id={"left_arrow"} iconColor={colors.black} />
        </TouchableOpacity>
        
      )}
      <View style={{ flex: 1 }}>
        {isShowAppIcon && (
          <Image
            style={{ width: 93, height: 28 }}
            source={images.appIcon}
            resizeMode="contain"
          />
        )}
        {heading && <CommonText text={heading} style={styles().headingTxt} />}
      </View>

      {searchIcon && <SVGComponent id={"1.1"} iconColor={colors.black} />}
      {notificationIcon && <SVGComponent id={"1.2"} iconColor={colors.black} />}
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
      height: 60,
      justifyContent: "center",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: props.isInnerScreen ? 3 : 15,
    },
    headingTxt: {
      color: colors.black,
      fontSize: fontSizes.extraLarge,
      fontFamily: fonts.TFArrowBold,
    },
    profileIcon: {
      width: 25,
      height: 25,
      marginLeft: 10,
    },
  });
export default Header;
