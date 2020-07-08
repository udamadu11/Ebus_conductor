import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text,Modal } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import colors from '../../utils/colors';
import ViewPassanger from './ViewPassanger';

export default class Dashboard extends React.Component {
   
state = {
    showListVisible: false
  };
  toggleListModal(){
    this.setState({showListVisible: !this.state.showListVisible});
  };
    render() {
        return (
            <View style={StyleSheet.container}>
                <Modal
                    animationType='slide'
                    visible= {this.state.showListVisible}
                    onRequestClose={()=> this.toggleListModal()}>
                        <ViewPassanger
                            closeModal={() =>this.toggleListModal()}
                        />
                </Modal>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '20%' }}>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="account-cash" color={colors.primary} size={30} />
                                </View>
                                    <Text style={styles.text}>Payments</Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.toggleListModal()}>
                            <Card style={styles.cardContainer}>
                                <View style={styles.Iconcontainer}>
                                    <Icon name="seat-passenger" color={colors.primary} size={40} />
                                </View>
                                <Text style={styles.text}>Passenger</Text>
                            </Card>
                        </TouchableOpacity>
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
        width: 150,
        height: 150,
        marginVertical: 10
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
        marginTop:30,
        fontWeight:"700",
        fontSize:15,
        color: colors.purple
        
    }
});