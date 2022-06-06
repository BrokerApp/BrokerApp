import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Stock from '../../utilities/Stock'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#030012", alignItems: "center", }} >
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }} >
                <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate("StockScreen")} >

                    <Stock />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Home