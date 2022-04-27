import React from "react";

import { View, Button, Text, StyleSheet} from "react-native";


function ContactScreen({navigation}){
    return <View style={styles.center}>
        <Text>This is contact screen</Text>
        <Button title="Go to info" onPress={()=>navigation.navigate("InfoScreen")}/>
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

export default ContactScreen