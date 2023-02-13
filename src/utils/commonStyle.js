import { StyleSheet } from "react-native";
import fonts from "../assets/fonts";
import colors from "./colors";
import { deviceHeight, deviceWidth, fontSizes } from "./variables";

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
    },
    modal_container: {
        width: deviceWidth, height: deviceHeight * 0.5, 
    },
    modal_child_container:{
        width: '100%', height: '100%', 
   },
   heading_txt:{
    fontFamily: fonts.MontserratBold, fontSize: fontSizes.mediumLarge, color: colors.black 
   },
   thin_sec_title:{
    fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraSmall,
    color: colors.txtGray, marginTop: 4
   },
   modal_title_txt:{
    fontFamily: fonts.TFArrowBold, fontSize: fontSizes.extraLarge, 
    color: colors.txt_color, paddingVertical: 15,
   },
   view_all_txt: {
    fontFamily: fonts.MontserratRegular, fontSize: fontSizes.extraSmall,
    color: colors.txt_color, marginBottom: 15,textTransform:'uppercase',
},
})
export default appStyles;