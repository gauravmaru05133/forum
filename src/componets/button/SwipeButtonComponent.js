import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import SwipeButton from "rn-swipe-button";
import colors from "../../utils/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  fontSizes,
  fontWeights,
  montserratFont,
  textTransform,
} from "../../utils/variables";

const SwipeButtonComponent = ({
  railBackgroundColor,
  title,
  thumbIconBackgroundColor,
  railFillBackgroundColor,
  railBorderColor,
  railFillBorderColor,
  titleFontSize,
  height,
  titleColor,
  swipeSuccess,
}) => {
  const ThumbIcon = () => {
    return (
      <FontAwesome5
        style={styles.icon}
        name={"arrow-right"}
        color={colors.white}
        size={fontSizes.mediumLarge}
      />
    );
  };

  return (
    <SwipeButton
      containerStyles={styles.containerStyles}
      railBackgroundColor={colors.swipeBackground || railBackgroundColor}
      railBorderColor={colors.swipeBackground || railBorderColor}
      railFillBorderColor={colors.txt_color || railFillBorderColor}
      thumbIconBackgroundColor={colors.txt_color || thumbIconBackgroundColor}
      thumbIconBorderColor={colors.txt_color || thumbIconBorderColor}
      railFillBackgroundColor={colors.txt_color || railFillBackgroundColor}
      titleFontSize={12 || titleFontSize}
      height={40 || height}
      thumbIconComponent={ThumbIcon}
      railStyles={styles.railStyles}
      thumbIconStyles={styles.thumbIconStyles}
      title={title}
      titleColor={colors.black || titleColor}
      titleStyles={styles.titleStyles}
      onSwipeSuccess={swipeSuccess}
      shouldResetAfterSuccess={true}
    />
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    borderRadius: 0,
  },
  railStyles: {
    borderRadius: 0,
  },
  thumbIconStyles: {
    borderRadius: 0,
  },
  titleStyles: {
    fontFamily: montserratFont.montserratMedium,
    textTransform: textTransform.uppercase,
  },
});

export default SwipeButtonComponent;
