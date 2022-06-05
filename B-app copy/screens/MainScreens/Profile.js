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
            {/* <Avatar rounded source={{ uri: "https://firebasestorage.googleapis.com/v0/b/broker-app-202ae.appspot.com/o/24-248253_user-profile-default-image-png-clipart-png-download.png?alt=media&token=97cd489c-198f-43e1-9265-58a0c8066982" }} size={26} /> */}
            <Text style={{ color: "white" }} >{auth.currentUser.email}</Text>
            <Button title="Sign out" onPress={signOut} />
        </View>
    )
}

export default Profile