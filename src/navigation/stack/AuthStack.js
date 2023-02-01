import { } from "react";
import { } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenName from "../../utils/screenName";
import Login from "../../screens/auth/Login";
import Splash from "../../screens/Splash";
import OTP from "../../screens/auth/OTP";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={screenName.SPLASH}
                component={Splash}
            />
            <Stack.Screen
                name={screenName.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={screenName.OTP}
                component={OTP}
            />

        </Stack.Navigator>
    )
}
export default AuthStack;
