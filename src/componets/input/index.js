import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import SvgComponent from "../svgIcon/SvgComponent";
import { fontSizes, montserratFont, tfArrowFont } from "../../utils/variables";
import colors from "../../utils/colors";
import Divider from "../divider";

const Input = ({
  label,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  placeholder,
  onEditClick,
  editable,
  keyboardType,
  inputStyle,
  style,
  isDivider=true
}) => {
  return (
    <>
      <View style={[styles.row,style]}>
        {leftIcon && <SvgComponent id={leftIcon} container={{ marginRight: 10 }} />}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
          placeholderTextColor={colors.txtGray}
          style={[styles.value,inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={editable}
          keyboardType={keyboardType||'default'}
        />
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={onEditClick} style={{zIndex:9}}>
            <SvgComponent id={rightIcon} container={{ marginLeft: 10 }} />
          </TouchableOpacity>
        )}
      </View>
      {isDivider && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
  },
  label: {
    fontSize: fontSizes.tiny,
    fontFamily: montserratFont.montserratRegular,
    color: colors.txtGray,
    marginBottom:5
  },
  value: {
    fontSize: fontSizes.mediumLarge,
    fontFamily:tfArrowFont.tfArrowFontRegular,
    padding:0,
    color:colors.black
  },
});

export default Input;
