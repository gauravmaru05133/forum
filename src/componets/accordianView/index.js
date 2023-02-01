import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useEffect } from "react";
import SvgComponent from "../svgIcon/SvgComponent";
import strings from "../../utils/strings";
import CommonText from "../commonText";
import colors from "../../utils/colors";
import { fontSizes } from "../../utils/variables";

const AccordianView = ({
  leftIconId,
  leftIconColor,
  text,
  expanded,
  onPress,
  children,
  textStyle,
}) => {
  const animationHeight = useRef(new Animated.Value(2)).current;

  const animate = () => {
    if (expanded) {
      Animated.timing(animationHeight, {
        duration: 200,
        toValue: 150,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(animationHeight, {
        duration: 200,
        toValue: 5,
        easing: Easing.linear,
      }).start();
    }
  };

  useEffect(() => {
    animate();
  }, [expanded]);
  return (
    <>
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <View style={styles.row}>
          <SvgComponent
            id={leftIconId || 3.5}
            iconColor={leftIconColor || colors.offerText}
            width={30}
            height={30}
          />
          <CommonText
            text={text || strings.tnc}
            style={[styles.info, textStyle]}
          />
          {expanded ? (
            <SvgComponent
              id={3.9}
              iconColor={colors.offerText}
              width={30}
              height={30}
            />
          ) : (
            <SvgComponent
              id={3.8}
              iconColor={colors.offerText}
              width={30}
              height={30}
            />
          )}
        </View>
      </TouchableOpacity>
      <Animated.View style={[{ height: animationHeight}]}>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    color: colors.offerText,
    fontSize: fontSizes.extraExtraSmall,
    flex: 1,
  },
});

export default AccordianView;
