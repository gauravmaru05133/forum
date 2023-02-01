import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import Heading from "../heading";
import images from "../../assets/images";
import { imageResize, deviceWidth, deviceHeight } from "../../utils/variables";
import CommonText from "../commonText";
import {
  montserratFont,
  fontSizes,
  textAlign,
  textTransform,
} from "../../utils/variables";
import AppButton from "../button/AppButton";
import Clock from "../../assets/images/svg/Clock";

const OfferCard = ({ title, description, buttonTitle, hots, onPress }) => {
  return (
    <View style={styles.container}>
      {hots && (
        <View style={styles.clockWrapper}>
          <Clock />
        </View>
      )}
      <View style={styles.innerContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/images/offerImage.png")}
            style={styles.offerImage}
          />
        </View>
        <Heading heading={title} style={styles.heading} />
        <CommonText text={description} style={styles.description} />
      </View>
      <AppButton
        style={styles.button}
        title={buttonTitle}
        labelStyle={styles.buttonLabel}
        actionClick={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: deviceWidth / 3,
    height: deviceHeight / 2.4,
  },
  innerContainer: {
    paddingHorizontal: 10,
    backgroundColor: colors.offWhite,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    flex:1
  },
  imageWrapper: {
    width: 115,
    height: 115,
    backgroundColor: "#fff",
    borderRadius: 115 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  heading: {
    fontFamily: montserratFont.montserratSemiBold,
    fontSize: fontSizes.extraExtraSmall,
    marginVertical: 10,
    textAlign: textAlign.center,
  },
  description: {
    fontSize: fontSizes.extraExtraSmall,
    textAlign: textAlign.center,
    colors: colors.offerText,
    marginBottom: 20,
  },
  button: {
    marginVertical: 0,
  },
  buttonLabel: {
    fontSize: fontSizes.tiny,
    textTransform: textTransform.uppercase,
  },
  clockWrapper: {
    position: "absolute",
    zIndex: 9,
    right: 0,
  },
});

export default OfferCard;
