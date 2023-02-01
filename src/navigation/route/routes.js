import {  } from "react";
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import TabRoutes from "./Tab" 
import AuthStack from "../stack/AuthStack";
import AppStack from "../stack/AppStack";

export default Routes = ()=>{
    return (
        <NavigationContainer>
            <TabRoutes/>
            {/* <AuthStack/> */}
        </NavigationContainer>
    )
}

