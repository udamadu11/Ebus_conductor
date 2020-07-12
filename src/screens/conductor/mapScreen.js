import React,{useState,useEffect} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialState = {
    latitude:null,
    longitude:null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}
const initialState1 = {
  latitude:	6.927079,
  longitude:79.861244,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const MapScreen = () => {

    const [currentPosition, setCurrentPositiion] = useState(initialState);
    const [currentPosition1, setCurrentPositiion1] = useState(initialState1);
   useEffect(()=>{
    Geolocation.watchPosition(position => {
      // alert(JSON.stringify(position))
      const {longitude, latitude} = position.coords;
      setCurrentPositiion({
        ...currentPosition,
        latitude,
        longitude,
      })
     },error =>alert(error.message),
     {timeout:20000, maximumAge:1000}
     ),
     Geolocation.setRNConfiguration(config=>{
       setCurrentPositiion1({
        latitude:	6.927079,
        longitude:79.861244,
       })
     })
   }, [])
    return currentPosition.latitude ?(
            <MapView 
              provider={PROVIDER_GOOGLE}
              style={{flex:1}}
              initialRegion={currentPosition}
              showsUserLocation>
                  <Marker coordinate={currentPosition}>
                      <Icon name='bus-marker' size={40}/>
                  </Marker>
                  <Marker coordinate={currentPosition1}>
                      <Icon name='bus-marker' size={40}/>
                  </Marker>
            </MapView>
          ) : <ActivityIndicator style={{flex:1}} animating size="large" /> 
    }    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MapScreen;