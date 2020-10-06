import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"



import LoadingScreen from '../screens/loadingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import SetNewPasswordScreen from '../screens/Auth/SetNewPasswordScreen';
import DashboardNavigator from './DashboardNavigator';
import ViewPassanger from '../screens/conductor/ViewPassanger';
import PassangerProfile from '../screens/conductor/PassangerProfile';
import ForgotPasswordScreen from '../screens/Auth/ForgetPasswordScreen';
import VerifyCodeScreen from '../screens/Auth/VerifyCodeScreen';
import PasswordResetScreen from '../screens/Auth/PasswordResetScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (

    <Stack.Navigator>

        <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
        />

         <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                headerShown: false,
                headerLeft: null
            }}
        />

        <Stack.Screen
            name="ResetPassword"
            component={ForgotPasswordScreen}
            options={{ title: "Forgot Password" }}
        />

        <Stack.Screen
            name="LinkVerify"
            options={{ title: "Verify Code" }}
            component={VerifyCodeScreen}
        />

        <Stack.Screen
            name="PasswordReset"
            options={{ title: "Reset Password" }}
            component={PasswordResetScreen}
        />

        <Stack.Screen
            name="ViewPassanger"
            options={{ title: "Passengers" }}
            component={ViewPassanger}
        />
        <Stack.Screen
            name="Dashboard"
            component={DashboardNavigator}
            options={{ title: "Dashboard", headerShown: false }}
        />
        <Stack.Screen
            name="PassengerProfile"
            component={PassangerProfile}
            options={{ title: "Profile", headerShown: false }}
        />
        

{/*
        <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ title: "Register" }}
        />

       */}

    </Stack.Navigator>
)

export default AuthNavigator;