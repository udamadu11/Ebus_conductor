import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppCard from '../../components/AppCard'
import colors from '../../utils/colors'
import AppIcon from '../../components/AppIcon'



const UserAccountScreen = ({ name = "Siny Johns", email = "joohndoe@gmail.com", image = "https://cdn.pixabay.com/photo/2017/04/03/15/52/love-you-2198772__340.png", navigation }) => {
    return (
        <View>
            <AppCard
                titleStyle={styles.name}
                title={name}
                subTitle={email}
                image={image}
               // onPress={() => navigation.navigate("EditUserProfile")}
            />
            <View style={styles.container}>
                <AppCard title="My Messages" IconComponent={<AppIcon name="forum-outline" backgroundColor={colors.primary} />} />
                <AppCard title="Settings" style={{ marginVertical: 10 }} IconComponent={<AppIcon name="cog" backgroundColor={'#5515ee'} />} />
                <AppCard title="Logout"  IconComponent={<AppIcon name="logout" backgroundColor={'#F5d529'} />} />

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
