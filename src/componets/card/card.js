import React from "react";
import { StyleSheet,View} from 'react-native'
import colors from "../../utils/colors";

const Card = ({ children, style }) => {
    return(
        <View  style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: colors.white,
        padding: 10,
        marginVertical:10
    }
})

export default Card