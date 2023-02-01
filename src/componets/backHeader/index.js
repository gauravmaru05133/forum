import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../utils/colors";
import { fontSizes, tfArrowFont } from "../../utils/variables";

const BackHeader = ({ heading, onBackPress }) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onBackPress}>
        <FontAwesome5
          style={styles.icon}
          name={"arrow-left"}
          color={colors.black}
          size={fontSizes.mediumLarge}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding:10
  },
  heading: {
    fontSize: fontSizes.mediumLarge,
    color: colors.black,
    fontFamily: tfArrowFont.tfArrowFontRegular,
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
});

export default BackHeader;
