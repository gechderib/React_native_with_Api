import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { MainStackNavigator } from './navigation/StackNavigation';
import BottomTabNavigator from './navigation/TabNavigation';
import DrawerNavigator from './navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator/> */}
      {/* <BottomTabNavigator/> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
