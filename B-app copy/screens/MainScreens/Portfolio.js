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

            <View style={{ width: "100%", backgroundColor: "#030000", marginTop: 5, paddingLeft: 30, borderBottomColor: "#454545", borderBottomWidth: 0.5 }} >
                <Text style={{ color: "white", fontSize: 28, alignItems: "center", justifyContent: "center" }} >Amazon</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{ color: "gray", fontSize: 24, }} >AMZN</Text>
                    <Text style={{ backgroundColor: z >= 0 ? "#09ad00" : "#ad0000", fontSize: 20, marginRight: 10, color: "white", borderRadius: 10, marginBottom: 5 }}> {z} $ </Text>
                </View>



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
