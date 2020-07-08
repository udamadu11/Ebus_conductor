import React from 'react';
import { View, StyleSheet,Text} from 'react-native';
import { Card, Appbar } from 'react-native-paper';

const Passanger = () =>{
    return(
        <View style={styles.container}> 
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default  Passanger;