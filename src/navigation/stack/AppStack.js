import { } from "react";
import { } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenName from "../../utils/screenName";
import Home from "../../screens/Home";
import Login from "../../screens/auth/Login";
import Splash from "../../screens/Splash";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={screenName.HOME}
        component={Home}
      />
     


    </Stack.Navigator>
  );
};
export default AppStack;
