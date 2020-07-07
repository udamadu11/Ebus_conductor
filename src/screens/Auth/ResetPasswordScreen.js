import React,{useState} from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import images from '../../utils/images';


const ResetPasswordScreen = ({navigation}) =>{
        const [enableAvoiding,setEnable] = useState(false);
        return (
            <KeyboardAvoidingView behavior='position' enabled={enableAvoiding} style={styles.container}>
                <Card>
                    <Card.Cover source={images.FORGOT_PASSWORD_BACKROUND} />
                </Card>
                <Text style={{ color: 'grey', justifyContent: 'center', fontSize: 16, alignSelf: 'center', marginTop: 10 }}>To recover your Password ,You need to Enter</Text>
                <Text style={{ color: 'grey', justifyContent: 'center', fontSize: 16, alignSelf: 'center' }}>your registration Email address.We will sent the </Text>
                <Text style={{ color: 'grey', justifyContent: 'center', fontSize: 16, alignSelf: 'center' }}>Recovery code to your Email</Text>

                
                <TextInput
                    style={{ height: 40, marginTop: 10, width: 300, alignSelf: 'center' }}
                    placeholder="Email"
                    label="Email"
                    mode="outlined"
                    onFocus = {()=> setEnable(true)}
                />
                
                <Button onPress={() => navigation.navigate("LinkVerify")}
                    icon="share"
                    mode="contained"
                    style={{ width: 300, alignSelf: 'center', marginTop: 20, backgroundColor: 'purple' }}>
                    Send
                </Button>
            </KeyboardAvoidingView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    }
});

export default ResetPasswordScreen;