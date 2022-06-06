import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Stock from '../../utilities/Stock'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#030012", alignItems: "center", }} >
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }} >
                <Stock />

            </ScrollView>
        </View>
    )
}

export default Home