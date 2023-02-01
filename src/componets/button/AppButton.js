import {} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { deviceWidth, fontSizes, textTransform } from "../../utils/variables";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import fonts from "../../assets/fonts";
import SvgComponent from "../svgIcon/SvgComponent";

const AppButton = ({
  style,
  labelStyle,
  actionClick,
  title,
  isIconRight,
  iconName,
  disabled,
  isIconLeft,
  iconLeft,
  iconLeftColor,
  iconRightWidth,
  iconRightHeight,
  iconRightColor
}) => {
  return (
    <TouchableOpacity
      style={[styles({ disabled }).container, style]}
      onPress={actionClick}
      disabled={disabled ? disabled : false}
    >
      {isIconLeft && (
        <SvgComponent
          id={iconLeft ? iconLeft : "3.7"}
          iconColor={iconLeftColor ? iconLeftColor : colors.white}
        />
      )}
      <Text style={[styles().txtStyle, labelStyle]}>{title}</Text>
      {isIconRight && (
        <SvgComponent
          width={iconRightWidth}
          height={iconRightHeight}
          id={iconName ? iconName : "1.4"}
          iconColor={iconRightColor||colors.white}
        />
      )}
    </TouchableOpacity>
    // <Button mode="contained-tonal"
    //     buttonColor={colors.txt_color}
    //     style={[{ borderRadius: 5, marginVertical: 30, width: '100%', }, style]}
    //     labelStyle={[{ fontSize: fontSizes.extraSmall, color: colors.white ,paddingVertical:4}, labelStyle]}
    //     //buttonColor={enable?colors.gray:colors.toolbar_bg_color}
    //     icon={({ size, color }) => (
    //         iconName ?
    //             <MaterialCommunityIcons
    //                 name={iconName}
    //                 color={colors.white}
    //                 size={30}
    //             /> : null
    //     )}
    //     contentStyle={{ flexDirection: isIconRight ? 'row-reverse' : 'row' }}
    //     disabled={disabled}
    //     onPress={() => actionClick()}>
    //     {title}
    // </Button>
  );
};
const styles = (props = {}) =>
  StyleSheet.create({
    container: {
      borderRadius: 1,
      marginVertical: 30,
      width: "100%",
      backgroundColor: props.disabled ? colors.gray : colors.txt_color,
      flexDirection: "row",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      alignCenter: "center",
      alignSelf: "center",
    },
    txtStyle: {
      fontSize: fontSizes.small,
      color: colors.white,
      fontFamily: fonts.MontserratMedium,
      paddingTop: 2,
      textTransform: textTransform.uppercase,
    },
  });
export default AppButton;
