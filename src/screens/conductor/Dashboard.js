import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text} from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import colors from '../../utils/colors';
import ViewPassanger from './ViewPassanger';

export default class Dashboard extends React.Component {

    render({navigation}=this.props) {
        return (
            <View style={StyleSheet.container}>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '30%' }}>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="cash-plus" color={colors.primary} size={30} />
                                </View>
                                    <Text style={styles.text}>Income</Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('ViewPassanger')} >
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="seat-passenger" color={colors.primary} size={40} />
                                </View>
                                <Text style={styles.text}>Passenger</Text>
                            </Card>
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="seat" color={colors.primary} size={30} />
                                </View>
                                    <Text style={styles.text}>Booking</Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('ViewPassanger')} >
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="seat-passenger" color={colors.primary} size={40} />
                                </View>
                                <Text style={styles.text}>Passenger</Text>
                            </Card>
                        </TouchableOpacity>
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
    },
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.30,
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        marginVertical: 10,
        marginHorizontal:10
    },
    Iconcontainer:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.white,
        borderRadius: 40,
        borderColor: colors.primary,
        borderWidth: 5,
        height: 50,
        width: 50
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        fontWeight:"700",
        fontSize:15,
        color: colors.purple
        
    }
});