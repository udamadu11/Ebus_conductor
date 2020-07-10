import React,{useState,useEffect} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const initialState = {
    latitude:null,
    longitude:null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const MapScreen = () => {

    const [currentPosition, setCurrentPositiion] = useState(initialState);

   useEffect(()=>{
    Geolocation.getCurrentPosition(position => {
      // alert(JSON.stringify(position))
      const {longitude, latitude} = position.coords;
      setCurrentPositiion({
        ...currentPosition,
        latitude:6.927079,
        longitude:79.861244,
      })
     },error =>alert(error.message),
     {timeout:20000, maximumAge:1000}
     )
   }, [])
    return currentPosition.latitude ?(
            <MapView 
              provider={PROVIDER_GOOGLE}
              style={{flex:1}}
              initialRegion={currentPosition}
              showsUserLocation
            />
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