import { View, Text } from 'react-native'
import { Avatar, Button } from "react-native-elements"
import React from 'react'
import { auth } from '../../firebase'

const Profile = () => {

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.navigate("Login")
        })
    }
    console.log(auth.currentUser.displayName)
    return (
        <View style={{ backgroundColor: "#02000d", flex: 1, alignItems: "center" }}>
            <View style={{ marginTop: 10, marginBottom: 10 }} >
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} size={80} />
            </View>
            <Text style={{ color: "white", marginTop: 10, marginBottom: 10 }} >{auth.currentUser.displayName}</Text>
            <Button title="Sign out" onPress={signOut} />
        </View>
    )
}

export default Profile