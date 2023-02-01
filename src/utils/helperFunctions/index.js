import requestCamera from "./requestCamera";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const pickImageCamera = async () => {
  try {
    const cameraPermission = await AsyncStorage.getItem("cameraPermission");
    if (cameraPermission === "granted") {
      launchCamera({ noData: true }, (response) => {
        if (response.didCancel) {
          console.log("User cancelled photo picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          return response.assets[0];
        }
      });
    } else {
      requestCamera();
    }
  } catch (err) {
    console.log(err);
  }
};

export const pickImageGallery = () => {
  try {
    launchImageLibrary({ noData: true }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        return response.assets[0];
      }
    });
  } catch (error) {
    console.log(error);
  }
};
