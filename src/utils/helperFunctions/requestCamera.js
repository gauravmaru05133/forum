import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const requestCamera = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            await AsyncStorage.setItem('cameraPermission', "granted")
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
}

export default requestCamera