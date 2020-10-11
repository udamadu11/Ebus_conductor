import { result, set } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator, Icon } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import reservationAPI from '../../api/reservation';

const ReservationDetailScreen = ({ navigation, route }) => {

    const [busNo, setBusNo] = useState(null);
    const [bookedDate, setbookedDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);
    const [seats, setSeats] = useState(0);

    const { id } = route.params;
    const resId = route.params.id;

    
    async function fetchData(){
        // console.log(resId);
        const result = await reservationAPI.getResDetails(resId);
        if (!result.ok) {
            return alert("Error while connecting.");
        }
        setSeats(result.data.numOfSeats);
        // setBusId(result.data.busId);
        setbookedDate(result.data.date);
        setBusNo(result.data.busNo);
        setStartPoint(result.data.startPoint);
        setEndPoint(result.data.endPoint);
        setLoading(false);
        return;
    }

    useEffect( () =>{
        fetchData();
    },[route]);

    return (
        <ScrollView style={styles.container}>
            {loading ? 
            <ActivityIndicator size="large" color="#0000ff" />
            :
            <View>
                <Card style={{ justifyContent: 'center', marginTop: 100, textAlign:'center' }}>
                    <Text style={{ color: 'black', justifyContent: 'center', fontSize: 20, marginTop: 15, textAlign:'center' }}><Text style={{ fontWeight: 'bold' }}>Bus Number : {busNo}</Text></Text>
                    <Text style={{ color: 'black', justifyContent: 'center', fontSize: 20, marginTop: 10, textAlign:'center' }}><Text style={{ fontWeight: 'bold' }}>Bus Route : {startPoint} - {endPoint}</Text></Text>
                    <Text style={{ color: 'black', justifyContent: 'center', fontSize: 20, marginTop: 10, textAlign:'center' }}><Text style={{ fontWeight: 'bold' }}>Reserved date : {bookedDate}</Text></Text>
                    <Text style={{ color: 'black', justifyContent: 'center', fontSize: 22, marginTop: 10, textAlign:'center', marginBottom:15 }}><Text style={{ fontWeight: 'bold' }}>Reserved Number of Seats : {seats}</Text></Text>
                </Card>
            </View>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
button: {
    marginTop: 60,
    alignSelf: 'center',
    marginBottom: 50,
},
input: {
    height: 50,
    width: 80,
},
text: {
    marginTop:10,
    fontSize:28,
    fontWeight:'bold',
    marginBottom:10
},
buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    padding: 30,
},
});

export default ReservationDetailScreen;