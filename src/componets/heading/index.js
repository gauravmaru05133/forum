import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";
import {tfArrowFont,fontSizes} from '../../utils/variables'

const Heading = ({ heading, style }) => {
  return <Text style={[styles.text, style]}>{heading}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: fontSizes.extraLarge,
    fontFamily:tfArrowFont.tfArrowFontRegular
  },
});

export default Heading;
