import { useRef } from "react";
import { View, Text } from 'react-native'
import TabRoutes from "./Tab"
import AuthStack from "../stack/AuthStack";
import AppStack from "../stack/AppStack";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import Constant from "../../constant";
import { useDispatch } from "react-redux";
import { AddToRedux } from "../../redux/addToRedux";
import { SCREEN_NAME } from "../../redux/reducers/ScreenName";

export default Routes = () => {
    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef();
    const dispatch = useDispatch()

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute().name;
            }}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.getCurrentRoute().name;
                const trackScreenView = () => {
                    Constant.screenName = currentRouteName
                    console.log("routes >> 31",currentRouteName)
                    dispatch(AddToRedux(currentRouteName,SCREEN_NAME))
                };

                if (previousRouteName !== currentRouteName) {
                    // Save the current route name for later comparison
                    routeNameRef.current = currentRouteName;

                    // Replace the line below to add the tracker from a mobile analytics SDK
                    await trackScreenView(currentRouteName);
                }
            }}
        >
            <TabRoutes />
            {/* <AuthStack/> */}
        </NavigationContainer>
    )
}

