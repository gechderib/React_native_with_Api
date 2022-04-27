import React from "react";
import { View, Button, Text, StyleSheet} from "react-native";


function HomeScreen({navigation}){
    return <View style={styles.center}>
        <Text>This is home screen</Text>
        <Button title="Go to about screen" onPress={()=>navigation.navigate("AboutScreen")}/>
    </View>
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
})

export default HomeScreen