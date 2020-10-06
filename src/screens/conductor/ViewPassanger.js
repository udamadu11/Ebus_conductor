import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Text,FlatList,Image,SafeAreaView,Alert} from 'react-native';
import { Card, Appbar } from 'react-native-paper';
import images from '../../utils/images';
import userAPI from '../../api/user';
import _ from "lodash";

const ViewPassanger = ({navigation}) =>{
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const fetchData = async (values) =>{
        const result = await userAPI.viewPassengers(_.pick(values,["name","email","id","number","address"]));
            if (result.ok){
                setData(result)
                setLoading(false)
            }else{
                Alert.alert("Somthing Wrong")
            }
       }
        
        useEffect(()=>{
            fetchData();
        },[]);

    const renderList = ((item) =>{
        return(
            <Card style={styles.myCard} key={item.id} onPress={()=> navigation.navigate("PassengerProfile")}>
                <View style={styles.cardView}>
                    <Image 
                        style={styles.avator}
                        source={images.USER_PROFILE_BACKGROUND}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </View>
            </Card>
        )
    });

    return(
        <SafeAreaView style={{flex:1}}>
        <FlatList 
                data={data}
                keyExtractor={item=> item._id}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                onRefresh={()=>fetchData()}
                refreshing={loading}
            />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    myCard:{
        margin:5,
        padding:5
      },
      cardView:{
          flexDirection:'row',
          padding:6
      },
      text:{
        fontSize:20,
      },
      avator:{
        width:60,
        height:60,
        borderRadius:30
      }
});

export default ViewPassanger;