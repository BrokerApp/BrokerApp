import { View, Text } from 'react-native'
import React from 'react'

const Portfolio = () => {
    return (
        <View style={{ backgroundColor: "#02000d", flex: 1, alignItems: "center" }} >
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 28 }} >Apple inc.   145$</Text>
                <Text style={{ color: "gray", fontSize: 13 }} >AAPL</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 28 }} >Google   2290$</Text>
                <Text style={{ color: "gray", fontSize: 13 }} >GOOGL</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 28 }} >Amazon.com   2447$</Text>
                <Text style={{ color: "gray", fontSize: 13 }} >AMZN</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 28 }} >Tesla   703$</Text>
                <Text style={{ color: "gray", fontSize: 13 }} >TSLA</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 28 }} >Facebook   190$</Text>
                <Text style={{ color: "gray", fontSize: 13 }} >FB</Text>
            </View>



        </View>
    )
}

export default Portfolio