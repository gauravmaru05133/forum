import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import AppButton from "../button/AppButton";
import SvgComponent from "../svgIcon/SvgComponent";
import colors from "../../utils/colors";
import {
  fontSizes,
  tfArrowFont,
  montserratFont,
  deviceWidth,
  imageResize,
  deviceHeight
} from "../../utils/variables";
import AppImage from "../image/AppImage";

const OverlayCard = ({ source, title, description, btnTitle }) => {
  return (
    <View>
    <ImageBackground source={require("../../assets/images/fp_2.png")}   resizeMode={imageResize.center}>
      <View style={styles.overlayContainer}>
        <Image source={source} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.row}>
          <View>
            <AppButton
              title={btnTitle}
              style={styles.btnWrapper}
              labelStyle={styles.labelStyle}
              isIconRight={true}
              iconRightColor={colors.buttonPrimary}
              iconRightWidth={30}
              iconRightHeight={30}
            />
          </View>
          <SvgComponent
            id={1.5}
            iconColor={colors.white}
            container={styles.icon}
          />
        </View>
      </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "rgba(13, 13, 13, 0.7)",
    marginRight: 10,
    width: deviceWidth / 1.5,
    height: deviceHeight/3.3
  },
  container: {
    zIndex: 9999,
  },
  btnWrapper: {
    backgroundColor: colors.offWhite,
    marginTop: 30,
    marginBottom: 0,
    marginLeft:20,
    width:undefined,
    paddingHorizontal:20
  },
  labelStyle: {
    color: colors.buttonPrimary,
    fontSize: fontSizes.extraExtraSmall,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.mediumLarge,
    fontFamily: tfArrowFont.tfArrowFontRegular,
    marginVertical: 15,
  },
  description: {
    color: colors.white,
    fontFamily: montserratFont.montserratRegular,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position:'absolute',
    bottom:20,
    left:0,
    right:0
  },
  icon: {
    justifyContent: "flex-end",
    marginTop: 20,
    right:10
  },
});

export default OverlayCard;
