import { } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { deviceWidth, fontSizes, imageResize } from "../../utils/variables";
import { Button } from "react-native-paper";
import AppImage from "../image/AppImage";
import fonts from "../../assets/fonts";


const FeaturedProducts = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgWHiteCOntainer}>
                <View style={styles.imgContainer}>
                    <AppImage
                        style={{ width: undefined, height: undefined, flex: 1 }}
                        source={item.img}
                        resizeMode={imageResize.center}
                    />
                </View>
            </View>
            <Text style={styles.titleStyle}>{item.title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginRight: 10,
    },
    imgWHiteCOntainer: {
        width: 80, height: 80,
        backgroundColor: colors.white, justifyContent: 'center', alignContent: 'center', alignItems: 'center'
    },
    imgContainer:{
        width: 64, height: 64
    },titleStyle:{
        color: colors.txtGray, fontFamily: fonts.MontserratRegular,
                fontSize: fontSizes.extraExtraSmall, marginTop: 8
    }
})
export default FeaturedProducts