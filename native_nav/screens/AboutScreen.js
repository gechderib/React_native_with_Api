import React from "react";

import { View, Button, Text, StyleSheet} from "react-native";


function AboutScreen(){
    return <View style={styles.center}>
        <Text>This is about screen</Text>
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

export default AboutScreen