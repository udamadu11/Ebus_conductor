import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

// import EditUserProfileScreen from '../screens/Passenger/EditUserProfileScreen';
import SetNewPasswordScreen from '../screens/Auth/SetNewPasswordScreen';
// import ChangePasswordScreen from '../screens/Passenger/ChangePasswordScreen';
 import ConductorAccDetails from '../screens/conductor/ConductorAccDetails';
 import ConductorProfile from '../screens/conductor/ConductorProfile';
 import EditConductorProfileScreen from '../screens/conductor/EditConductorProfileScreen';
 import ChangePasswordScreen from '../screens/conductor/ChangePassword';


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

        <Stack.Screen
            name="EditConductor"
            component={EditConductorProfileScreen}
            options={{
                headerShown: true,
                headerLeft: null,
                title: 'Edit Details'
            }}
        />

        <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{
                headerShown: true,
                headerLeft: null,
                title: 'Change Password'
            }}
        />

        
    </Stack.Navigator>

)

export default ProfileNavigator;