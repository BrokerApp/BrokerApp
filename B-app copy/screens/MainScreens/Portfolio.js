import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const x = "red";
const y = "blue"
const z = 10

const colorChange = () => {
    if (z > 0) {
        color: y
    } else {
        color: x
    }
}

const Portfolio = () => {


    return (
        <View style={{ backgroundColor: "#030012", flex: 1, }} >
            <View style={{ width: "100%", backgroundColor: "#030000", height: 70, marginTop: 5, paddingLeft: 30, justifyContent: "center", borderBottomColor: "#454545", borderBottomWidth: 0.5 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{ color: "white", fontSize: 28, }} >Amazon.com</Text>
                    <Text style={{ color: "white", fontSize: 28, marginRight: 10 }}> 2200 $</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{ color: "gray", fontSize: 13 }} >AMZN</Text>
                    <Text style={{ backgroundColor: z >= 0 ? "#09ad00" : "#ad0000", fontSize: 20, marginRight: 10, color: "white", borderRadius: 10, marginBottom: 5 }}> {z} $ </Text>
                </View>


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

const styles = StyleSheet.create({
    text: {
        color: z > 0 ? "blue" : "red"
    }
})
