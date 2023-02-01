import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import LoyaltyCoin from "../../assets/images/svg/LoyaltyCoin";
import { fontSizes } from "../../utils/variables";
import SvgComponent from "../svgIcon/SvgComponent";

const TilesCard = ({ title, description, isFlag, coinCount, hots }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("../../assets/images/offerImage.png")} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2}>{description}</Text>
      </View>
      {
        (isFlag = true && (
          <View style={styles.flagWrapper}>
            <LoyaltyCoin />
            <Text style={styles.coinCount}>{coinCount}</Text>
          </View>
        ))
      }
      {hots && (
        <SvgComponent id={1.5} iconColor={colors.red} container={styles.hots} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: colors.offWhite,
    padding: 10,
  },
  contentWrapper: {
    marginLeft: 10,
    flex: 1,
    marginRight: 50,
  },
  title: {
    color: colors.black,
  },
  flagWrapper: {
    backgroundColor: colors.buttonPrimary,
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 5,
    alignItems: "center",
    position: "absolute",
    right: -10,
    zIndex: 9,
    top: 10,
  },
  coinCount: {
    color: colors.white,
    marginLeft: 5,
    fontSize: fontSizes.tiny,
  },
  hots: {
    alignSelf: "flex-end",
    top: 10,
    left: 10,
  },
});

export default TilesCard;
