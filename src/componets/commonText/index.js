import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";
import { montserratFont, fontSizes } from "../../utils/variables";

const CommonText = ({ text, children, style }) => {
  return <Text style={[styles.text, style]}>{text || children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.greyTextColor,
    fontSize: fontSizes.extraSmall,
    fontFamily: montserratFont.montserratRegular,
  },
});

export default CommonText;
