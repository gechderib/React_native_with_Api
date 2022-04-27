import React from "react";
import {View, Text, StyleSheet} from "react-native"

function ScreenCheck(){
    return <View style={styles.center}>
        <Text>Screen check</Text>
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


export default ScreenCheck