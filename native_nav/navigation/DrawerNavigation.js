import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigation";
import { ContactStackNavigator, MainStackNavigator } from "./StackNavigation";

const Drawer = createDrawerNavigator()

const screenOptionStyle = {
    // headerShown:false
  };

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={screenOptionStyle}>
        <Drawer.Screen name="home" component={BottomTabNavigator}/>
        <Drawer.Screen name="contact" component={ContactStackNavigator}/>
    </Drawer.Navigator>
}

export default DrawerNavigator