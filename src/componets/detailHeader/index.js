import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CommonText from "../commonText";
import Heading from "../heading";
import colors from "../../utils/colors";
import strings from "../../utils/strings";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { fontSizes, montserratFont } from "../../utils/variables";
import SvgComponent from "../svgIcon/SvgComponent";

const DetailHeader = ({ attempedRemainning, coinCount, onBackPress }) => {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity onPress={onBackPress}>
          <FontAwesome5
            style={styles.icon}
            name={"arrow-left"}
            color={colors.black}
            size={fontSizes.mediumLarge}
          />
        </TouchableOpacity>
        <View style={[styles.row, styles.fullWidth]}>
          <Text style={styles.text}>{strings.earnToUnlockHeader}</Text>
          <SvgComponent id={"1.9"} />
          <Text style={styles.text}>{coinCount}</Text>
        </View>
        <SvgComponent id={"1.9"} />
        <SvgComponent id={"3.6"} />
      </View>
      <CommonText style={styles.text}>
        {strings.remainingAttempts}
        <CommonText style={styles.highLightedText} text={attempedRemainning} />
      </CommonText>
      <Heading heading={strings.dailyWheelBonanza} style={styles.heading} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidth: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: montserratFont.montserratRegular,
    fontSize: fontSizes.small,
    color: colors.black,
  },
  heading: {
    marginTop: 20,
    textAlign: "center",
  },
  highLightedText: {
    color: colors.highLightedText,
  },
});

export default DetailHeader;
