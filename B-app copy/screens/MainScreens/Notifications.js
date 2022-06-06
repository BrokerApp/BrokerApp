import { View, Text } from 'react-native'
import React from 'react'

const Notifications = () => {
    return (
        <View style={{ backgroundColor: "#030012", flex: 1, alignItems: "center" }}>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 18, marginTop: 10, marginBottom: 10 }} >The price of Tesla stocks is 37% lower than in previous year, now it costs 703$</Text>
                <Text style={{ color: "gray", fontSize: 8, marginTop: 10, marginBottom: 10 }} >05.06.2022 15:15</Text>
            </View>

        </View>
    )
}

export default Notifications