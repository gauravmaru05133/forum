import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabbar from "../../navigation/bottom/Tabbar.js";
import AppStack from "../stack/AppStack";

const Tab = createBottomTabNavigator();

export default function rTabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName={'tab'}
            screenOptions={{
                headerShown:false
            }}
            labeled="false"
            tabBar={props => <Tabbar {...props} />}
        >
            <Tab.Screen
                name={'tab'} component={AppStack}
                options={{
                    tabBarLabel: 'news',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
