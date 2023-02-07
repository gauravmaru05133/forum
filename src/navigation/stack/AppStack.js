import { } from "react";
import { } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenName from "../../utils/screenName";
import Home from "../../screens/Home";
import Login from "../../screens/auth/Login";
import Splash from "../../screens/Splash";
import FeedMediaDetails from "../../screens/FeedTab/FeedMediaDetails";
import VideoPlayer from "../../screens/VideoPlayer";
import Feed from "../../screens/FeedTab";
import FeedTab from "../../screens/FeedTab";

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

      <Stack.Screen
        name={screenName.FEED_TAB}
        component={FeedTab}
      />

      <Stack.Screen
        name={screenName.FEED_MEDIA_DETAILS}
        component={FeedMediaDetails}
      />


      <Stack.Screen
        name={screenName.VIDEO_PLAYER}
        component={VideoPlayer}
      />


    </Stack.Navigator>
  );
};
export default AppStack;
