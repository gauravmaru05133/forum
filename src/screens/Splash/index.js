import React, { useEffect } from "react";
import { View } from "react-native";
import AppImage from "../../componets/image/AppImage";
import images from "../../assets/images";
import { deviceWidth, imageResize } from "../../utils/variables";
import appStyles from "../../utils/commonStyle";
import Constant from "../../constant";
import { navigationToScreen } from "../../utils/navigations";
import screenName from "../../utils/screenName";
import { API } from "../../network/API";
import { useDispatch } from "react-redux";
import { AddToRedux } from "../../redux/addToRedux";
import { APP_CONSTANT } from "../../redux/reducers/AppConstant";

const Splash = ({ navigation }) => {
    const dispatch = useDispatch()


    useEffect(() => {
        Constant.navigation = navigation;
        fetchConstantsAPi();
        setTimeout(()=>{
            switchToLoginScreen()
        },1000)
    }, [])


    const fetchConstantsAPi = ()=>{
        API.getAppConstant(appConstantRes,'')
    }
        
    const appConstantRes = {
        success :(res)=>{
            console.log("constant_sucess",res)
            if (res) {
                dispatch(AddToRedux(res,APP_CONSTANT))
            } else {
                
            }
        },error:(err)=>{
            console.log("constant_error",err)
        }
    }


    //switch to login screen
    const switchToLoginScreen = () => {
        navigationToScreen(screenName.LOGIN)
    }

    return (
        <View style={appStyles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <AppImage
                    source={images.appLogoLargeIcon}
                    style={{ width: deviceWidth * 0.5, height: 150 }}
                    resizeMode={imageResize.contain}
                />
            </View>
        </View>
    )
}
export default Splash