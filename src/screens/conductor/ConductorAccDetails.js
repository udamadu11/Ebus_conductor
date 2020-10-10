import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppCard from '../../components/AppCard'
import colors from '../../utils/colors'
import AppIcon from '../../components/AppIcon'



const UserAccountScreen = ({ navigation }) => {
    const { user, logOut } = useAuth();

    return (
        <View>
            {/* <AppCard
                titleStyle={styles.name}
                title={user.name}
                subTitle={user.email}
                image={user.image}
               onPress={() => navigation.navigate("Profile")}
            /> */}
            <View style={styles.container}>
                <AppCard title="My Messages" IconComponent={<AppIcon name="forum-outline" backgroundColor={colors.primary} />} />
                <AppCard title="Settings" style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Setting')} IconComponent={<AppIcon name="cog" backgroundColor={'#5515ee'} />} />
                <AppCard title="Logout" onPress={() => logOut()} IconComponent={<AppIcon name="logout" backgroundColor={'#F5d529'} />} />

            </View>
        </View>
    )
}

export default UserAccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    name: {
        fontWeight: "bold",
        fontSize: 24,
        fontFamily: 'Arial',
        textTransform: "uppercase"
    }
})
