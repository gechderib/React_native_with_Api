import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import InfoScreen from "../screens/InfoScreen";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
//   headerBackTitle: "Back",
  headerShown:false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
    return <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="ContactScreen" component={ContactScreen}/>
        <Stack.Screen name="InfoScreen" component={InfoScreen}/>
    </Stack.Navigator>
}

export { MainStackNavigator , ContactStackNavigator};
