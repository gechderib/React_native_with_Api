import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Ionicons,FontAwesome} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title={<FontAwesome name="chevron-left" size={24} color="black" />} onPress={() => setCount((c) => c + 1)} />
        
      ),

    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Text>Post:{route.params?.post}</Text>
      <Text>{count}</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Detail", {
            itemId: 85,
            otherParam: "Anything you want here",
          })
        }
      />
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate("CreatePost");
        }}
      />
      <Button
        title="update"
        onPress={() => navigation.setOptions({ title: "updated" })}
      />
      <Button title="myhome" onPress={()=> navigation.navigate("MyHome")}/>
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  useLayoutEffect(()=>{
    navigation.setOptions(()=><Button title=""/>)
  })
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detail Screen</Text>
      <Text>{JSON.stringify(itemId)}</Text>
      <Text>{JSON.stringify(otherParam)}</Text>
      <FontAwesome name="chevron-left" size={24} color="black" />
      <Button
        title="Go to detail "
        onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="Go to detail... again"
        onPress={() =>
          navigation.push("Detail", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Back To The first Screen in Stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function Feeds(){
  return <Text>Feeds</Text>
}

function Messages(){
  return <Text>Messages</Text>
}

function MyHome(){
  return <Tab.Navigator>
    <Tab.Screen name="feeds" component={<Feeds/>}/>
    <Tab.Screen name="messages" component={<Messages/>}/>
  </Tab.Navigator>
}

function CreatePostScreen({ navigation }) {
  const [postText, setPostText] = useState("");
  return (
    <View>
      <TextInput
        multiline
        placeholder="what's on your mind"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <Text>{postText}</Text>
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/icon.png")}
    />
  );
}

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerTitle:"Replace All",
        // headerStyle: {
        //   backgroundColor: "#f4511e",
        // },
        // headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <Stack.Screen name="MyHome" component={MyHome} /*options={{headerShown:false}}*//>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Overview",
          headerTitle: (props) => <LogoTitle />,
          // headerRight: () => (
          //   <Button
          //     title="Info"
          //     color="black"
          //     onPress={() => {
          //       alert("information thing happen");
          //     }}
          //   />
          // ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            // color:"blue"
            // fontSize:10
            // fontFamily:
            // fontWeight:"bold"
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        initialParams={{ itemId: 42 }}
        options={{
          title:"Detail page",
          headerStyle:{
            backgroundColor:"blue"
          },
          headerBackImageSource:<FontAwesome name="chevron-left" size={24} color="black" />
        }}
      />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  commonStyle: {
    marginBottom: 30,
    color: "blue",
  },
});


// Only support in IOS

// headerBackTitle:(props)=><LogoTitle {...props}/>,
// headerBackTitleStyle:{
//   backgroundColor:"blue"
// },
// headerBackVisible:false,
// headerBackTitleVisible:false