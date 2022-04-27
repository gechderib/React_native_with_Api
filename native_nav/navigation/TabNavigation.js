import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigation";
import ScreenCheck from "../screens/ScreenCheck";

const Tab = createBottomTabNavigator()

const screenOptionStyle = {
    headerShown:false
  };

const BottomTabNavigator = () => {
    return <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen name="Home" component={MainStackNavigator}/>
        <Tab.Screen name="Contact" component={ContactStackNavigator} />
        <Tab.Screen name="check" component={ScreenCheck}/>
    </Tab.Navigator>
}

export default BottomTabNavigator