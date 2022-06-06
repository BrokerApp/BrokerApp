import { View, Text, StyleSheet } from 'react-native'
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
        <View style={{ backgroundColor: "#030012", flex: 1, alignItems: "center" }}>
            <View style={{ marginTop: 10, marginBottom: 10 }} >
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} size={80} />
            </View>
            <Text style={{ color: "white", marginTop: 10, marginBottom: 10, fontWeight: "400" }} >{auth.currentUser.displayName}</Text>
            {/* <View style={{ borderBottomWidth: 1, borderBottomColor: "white", bor }} /> */}
            <Button title="Sign out" onPress={signOut} />
            <View style={{ marginTop: 15 }} >
                <Text style={{ borderTopWidth: 1, borderTopColor: "gray", minWidth: 2000 }} ></Text>
            </View>
            {/* <View style={{ flexDirection: "row", marginBottom: 25 }} >
                <View style={{ flexDirection: "column" }} >
                    <Text style={styles.text}>Invested</Text>
                    <Text style={styles.number}>5185$</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text}>Cash</Text>
                    <Text style={styles.number}>1850000$</Text>
                </View>
            </View> */}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#191914"
    },
    text: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 25
    },
    number: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20
    }

})