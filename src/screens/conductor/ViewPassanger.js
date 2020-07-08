import React from 'react';
import { View, StyleSheet,Text,FlatList,Image} from 'react-native';
import { Card, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewPassanger = () =>{

    const data = [
        {id:1,name:"udara",description:"Passenger"},
        {id:2,name:"udara",description:"Passenger"},
        {id:3,name:"udara",description:"Passenger"},
        {id:4,name:"udara",description:"Passenger"},
        {id:5,name:"udara",description:"Passenger"},
    ];
    
    const renderList = ((item) =>{
        return(
            <Card style={styles.myCard}>
                <View style={styles.cardView}>
                    <Image 
                        style={styles.avator}
                        source={require('../../image/google.png')}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                </View>
            </Card>
        )
    });

    return(
        <View>
            <FlatList 
                data={data}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                keyExtractor={item=>`${item.id}`}
            />
        </View>
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