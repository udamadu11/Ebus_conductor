import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

// import EditUserProfileScreen from '../screens/Passenger/EditUserProfileScreen';
import SetNewPasswordScreen from '../screens/Auth/SetNewPasswordScreen';
// import ChangePasswordScreen from '../screens/Passenger/ChangePasswordScreen';
 import ConductorAccDetails from '../screens/conductor/ConductorAccDetails';
 import ConductorProfile from '../screens/conductor/ConductorProfile'


const Stack = createStackNavigator();

const ProfileNavigator = () => (

    <Stack.Navigator>

        <Stack.Screen
            name="UserProfile"
            component={ConductorAccDetails}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'User Profile'
            }}
        />
        <Stack.Screen
            name="Profile"
            component={ConductorProfile}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'Profile'
            }}
        />

        {/* <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'Reset Password'
            }}
        /> */}

        
    </Stack.Navigator>

)

export default ProfileNavigator;