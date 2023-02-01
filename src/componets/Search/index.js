import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import SvgComponent from "../svgIcon/SvgComponent";
import colors from "../../utils/colors";
import {fontSizes} from '../../utils/variables'

const Search = ({ placeholder, value, onChangeText, style }) => {
  return (
    <View style={[styles.searchWrapper, style]}>
      <SvgComponent id={1.1} iconColor={colors.buttonPrimary} width={30} height={30}/>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder || "Search"}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    searchWrapper:{
        backgroundColor:colors.offWhite,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        height:40
    },
    textInput:{
        fontSize:fontSizes.extraExtraSmall,
    }
});

export default Search;
