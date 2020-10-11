import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text} from 'react-native';


import DashboardIcon from '../../components/DashboardCard';

export default class Dashboard extends React.Component {

    render({navigation}=this.props) {
        return (
            <View style={StyleSheet.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '30%' }}>
                    <View style={{flexDirection:'row'}}>
                                <DashboardIcon 
                                    text="Passenger"
                                    name="seat-passenger"
                                    // onPress={()=>navigation.navigate('ViewPassanger')}
                                />
                                <DashboardIcon 
                                    text="Booking"
                                    name="seat"
                                    // onPress={()=>navigation.navigate('SetDateScreen')}
                                />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <DashboardIcon 
                                    text="Income"
                                    name="cash-plus"
                                />
                            </View>
                    </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});