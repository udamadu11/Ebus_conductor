import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, View, ImageBackground, Alert } from 'react-native';
import * as yup from 'yup';
import _ from "lodash";

import { AppForm, AppFormInput, SubmitButton, ErrorMessage } from '../../components/forms';
import colors from '../../utils/colors';
import useAuth from '../../auth/useAuth';
import images from '../../utils/images';
import userAPI from '../../api/user';

const reviewSchema = yup.object({
    oldpassword: yup.string().required('Old password is required').min(6),
    newpassword: yup.string().required('New password is required').min(6),
    confirmpassword: yup.string().required('Confirm password is required')
    .oneOf([yup.ref('newpassword'), null], 'Passwords must match')
});


const ChangePasswordScreen = ({ navigation }) => {

    const { user } = useAuth();
    const [updateState, setUpdateState] = useState({
        updateError: null,
        updateLoader: false,
    });

    const handleUpdate = async (values) => {
        setUpdateState({ updateLoader: true });
        const result = await userAPI.updatePassword(_.pick(values, ["oldpassword", "newpassword", "confirmpassword"]));
        setUpdateState({ updateLoader: false });
        if (!result.ok) {
            if (result.data) {
                setUpdateState({ updateError: result.data.error });
            }
            else {
                setUpdateState({ updateError: "An unknown error occurred." });
                console.log(result);
            }
            return;
        }
        if (result.ok){
            Alert.alert(
                'Password Change',
                'You have successefully changed you password!',
                [
                  { text: 'OK', onPress: () => navigation.navigate('Profile') }
                ],
                { cancelable: false }
              );
        }
    }

    return (
        
        <ScrollView style={styles.scrollView}>
            <ImageBackground source={images.LOGING_BACKGROUND} style={styles.backgroundImage} >
                <Image style={styles.avatar} source={{ uri : user.image }} />
                <View style={{paddingTop:130 ,justifyContent: "center",alignItems: 'center',}}>
                    <AppForm
                        initialValues={{ oldpassword: "" , newpassword: "" , confirmpassword: ""}}
                        validationSchema={reviewSchema}
                        onSubmit={handleUpdate}
                    >
                        <AppFormInput
                            // autoFocus={true}
                            name="oldpassword"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Old Password"
                            mode="outlined"
                            secureTextEntry
                        />

                        <AppFormInput
                            name="newpassword"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="New Password"
                            mode="outlined"
                            secureTextEntry
                        />

                        <AppFormInput
                            name="confirmpassword"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Confirm Password"
                            mode="outlined"
                            secureTextEntry
                        />

                        {updateState.updateError && <ErrorMessage error={updateState.updateError} />}

                        <SubmitButton
                            loading={updateState.updateLoader}
                            style={styles.button}
                            color={colors.primary}
                            contentStyle={styles.buttonContent}
                            title="Update"
                        />
                    </AppForm>
                </View>
            </ImageBackground>
        </ScrollView>
        

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
        alignSelf: 'center',
    },
    headText: {
        fontSize: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'purple'
    },
    buttonContent: {
        height: 40,
        width: 150,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    topImage: {
        width: 200, height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60
    },

    input: {
        height: 45,
        marginTop: 10,
        width: 300
    }
});

export default ChangePasswordScreen;