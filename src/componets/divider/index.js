import { View, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const Divider = ({style}) =>  {
  return (
    <View style={[styles.container, style]}/>
  )
}

const styles = StyleSheet.create({
    container:{
        height:1,
        backgroundColor:colors.txtGray,
        opacity:0.25,
        marginVertical:10
    }
})

export default Divider