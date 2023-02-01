import React, {  } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../utils/colors";
import Modal from "react-native-modal";


const AppModal = ({ isVisible, children, container,onBackButtonPress }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            backdropOpacity={0.8}
            backdropColor={colors.white}
            onBackButtonPress={onBackButtonPress}
            onBackdropPress={onBackButtonPress}
        >
            <View>
                <View style={{ width: 64, height: 5, backgroundColor: '#909090', alignSelf: 'center', marginBottom: 15, borderRadius: 20 }} />
                <View style={[{ backgroundColor: colors.white }, container]}>
                    {children}
                </View>
            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({

})
export default AppModal