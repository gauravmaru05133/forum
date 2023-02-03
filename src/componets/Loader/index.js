import {
    View,
    ActivityIndicator
} from "react-native";
import colors from "../../utils/colors";

const Loader = ({
    container,color
}) => {
    return (
        <View style={[{ width: '100%', height: '100%' },container]}>
            <ActivityIndicator
                size='large'
                color={color?color: colors.black}
            />
        </View>
    )
}
export default Loader;