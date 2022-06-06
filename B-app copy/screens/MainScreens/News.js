import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { collection, doc, Firestore, getDoc, setDoc } from "firebase/firestore"
import Stock from '../../utilities/Stock'


const News = () => {

    return (
        <View style={{ backgroundColor: "#030012", flex: 1, alignItems: "center" }}>
            <Stock />
        </View>
    )
}

export default News