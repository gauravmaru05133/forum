import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import fonts from '../../assets/fonts';
import SvgComponent from '../../componets/svgIcon/SvgComponent';
import colors from '../../utils/colors';
import Bottom from "../../utils/json/bottom.json";
import { deviceWidth, fontSizes } from '../../utils/variables';

const TabCell = ({ item, index, onClick, selectTab }) => {
    return (
        <TouchableOpacity
            style={styles().childContainer}
            onPress={onClick}
        >
            <SvgComponent
                id={selectTab == index ? item.iconSelect : item.iconUnselect}
                iconColor={selectTab == index ? colors.txt_color : colors.disable_txt_color}
            />
            <Text style={styles({ selectTab }).tabTxt}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = (props = {}) => StyleSheet.create({
    divider: {
        width: 1, height: 100, backgroundColor: colors.black
    },
    container: {
        width: '100%', height: 64, justifyContent: 'space-evenly',
        flexDirection: 'row', alignItems: 'center'
    },
    childContainer: {
        justifyContent: 'center', flex: 1,
        alignContent: 'center', alignItems: 'center',
        marginBottom: 10
    },
    tabTxt: {
        fontFamily: props.tab == props.index ? fonts.MontserratSemiBold : fonts.MontserratRegular,
        color: props.tab == props.index ? colors.txt_color : colors.disable_txt_color,
        fontSize: fontSizes.extraExtraSmall, marginTop: -4, textTransform: 'uppercase'
    }
})
export default TabCell
