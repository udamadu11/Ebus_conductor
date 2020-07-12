import React from 'react';
import { View, StyleSheet,Text,Image,Linking} from 'react-native';
import { Card,Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from  'react-native-vector-icons/FontAwesome5';
import images from '../../utils/images';
const Passanger = () =>{
    const openDial = () =>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:123456789")
        }else{
            Linking.openURL("telpromt:123456789")
        }
    }
  
    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['#8600b3', '#cc33ff', '#df80ff']}
                style={{height:'20%'}}
            />
            <View style={{marginTop:-50,alignSelf:'center'}}>
            <Image 
                source={images.USER_PROFILE_BACKGROUND}
                style={{width:120,height:120,borderRadius:60}}
            />
            </View>
            <View style={{margin:15,alignItems:'center'}}>
                <Title>Name</Title>
                <Text style={{fontSize:16}}>Description</Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:abc@abc.com")
            }}>
                <View style={styles.cardContent}>
                    <Icon name="envelope-square" size={32}/>
                    <Text style={styles.cardText}>Email</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <Icon name="phone-square" size={32}/>
                    <Text style={styles.cardText}>phone</Text>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mycard:{
        margin:5
    },
    cardContent:{
        flexDirection:'row',
        padding:8
    },
    cardText:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
});
export default  Passanger;