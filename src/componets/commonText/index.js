import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";
import { montserratFont, fontSizes } from "../../utils/variables";

const CommonText = ({ text, children, style,numberOfLines }) => {
  return <Text style={[styles.text, style]}
  numberOfLines={numberOfLines?numberOfLines:1}
  >{text || children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.greyTextColor,
    fontSize: fontSizes.extraSmall,
    fontFamily: montserratFont.montserratRegular,
  },
});

export default CommonText;
