import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/SimpleLineIcons"

const Settings = () => {
    const signOut = () => {
        auth.signOut().then(() => {
            navigation.navigate("Login")
        })
    }

    return (
        <View style={{ backgroundColor: "#030012", flex: 1, flexDirection: "column", alignItems: "flex-end" }} >
            {/* <View>
                <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 40, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                    <Text style={{ color: "white", fontSize: 28 }} >Privacy policy</Text>
                </View>
                <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 40, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                    <Text style={{ color: "white", fontSize: 28 }} >Information</Text>
                </View>
            </View> */}
            <View style={{}} >
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: "#030000", height: 40, marginTop: 5, paddingLeft: 30, }} onPress={signOut} >
                    <Icon name='logout' size={28} color="#8a0c03" />
                    <Text style={{ color: "#8a0c03", marginLeft: 5, fontSize: 28 }} >Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings