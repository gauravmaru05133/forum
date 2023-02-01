import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import colors from "../../utils/colors";
import { fontSizes } from "../../utils/variables";

const HeaderTxt = ({ width, height, heading, container, txtStyle }) => {
  return (
    <View style={[styles.mContainer, container]}>
      <Text style={[styles.mTxt, txtStyle]}>{heading ? heading : "Hello"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  mTxt: {
    color: colors.txt_color,
    fontFamily: fonts.TFArrowBold,
    fontSize: fontSizes.mediumLarge,
  },
});
export default HeaderTxt;
