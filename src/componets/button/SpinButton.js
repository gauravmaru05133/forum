import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../utils/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  fontSizes,
  montserratFont,
  textTransform,
} from "../../utils/variables";

const SpinButton = ({
  buttonText,
  onPress,
  iconName,
  iconColor = colors.white,
  iconSize = fontSizes.small,
}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      <FontAwesome5
        style={styles.icon}
        name={iconName}
        color={iconColor}
        size={iconSize}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent:'center'
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: montserratFont.montserratRegular,
    textTransform: textTransform.uppercase,
    marginRight:10
  },
});

export default SpinButton;
