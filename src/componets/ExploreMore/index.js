import {
  TouchableOpacity,StyleSheet
} from "react-native";
import strings from "../../utils/strings";
import { fontSizes, textTransform } from "../../utils/variables";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import CommonText from "../../componets/commonText";
import colors from "../../utils/colors";
import fonts from "../../assets/fonts";

const ExploreMore = ({
    title,onPress,rightSvgIcon,rightSvgIconSize,rightSvgIconColor,container,titleContainer
})=>{
    return(
        <TouchableOpacity style={[styles.main_container,container]}>
            <CommonText
              text={title?title:strings.explore_more_coupon}
              style={[styles.title_txt,titleContainer]}
            />
            <SvgComponent
              id={rightSvgIcon ? rightSvgIcon :'chevron-right'}
              width={rightSvgIconSize?rightSvgIconSize:30}
              height={rightSvgIconSize?rightSvgIconSize:30}
            />
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container:{
        width: '100%', height: 50, borderColor: colors.purple,
        borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignContent: 'center', alignItems: 'center',
        justifyContent: 'space-between', paddingLeft: 20, paddingRight: 10
    },
    title_txt:{
        color: colors.purple, fontFamily: fonts.MontserratSemiBold, fontSize: fontSizes.extraSmall,
        textTransform:textTransform.uppercase

    }
})
export default ExploreMore;