import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { collection, doc, Firestore, getDoc, setDoc } from "firebase/firestore"
import Stock from '../../utilities/Stock'


const News = () => {

    return (
        <View style={{ backgroundColor: "#02000d", flex: 1, alignItems: "center" }}>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 18, marginTop: 10, marginBottom: 10 }} >The price of Tesla stocks reached its lower position. Elon Musk says:"Our Gegafabric in Berlin will be the solution of this problem. We'll start the production of Model Y in the end of this year"</Text>
                <Text style={{ color: "gray", fontSize: 8, marginTop: 10, marginBottom: 10 }} >04.06.2022 09:15</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 18, marginTop: 10, marginBottom: 10 }} >Wall Street Journal has published its 150 Billionth example of newspaper </Text>
                <Text style={{ color: "gray", fontSize: 8, marginTop: 10, marginBottom: 10 }} >05.06.2022 15:21</Text>
            </View>
            <View style={{ width: "100%", backgroundColor: "#030000", alignItems: "flex-start", marginTop: 5, paddingLeft: 30, justifyContent: "center", borderRadius: 12 }} >
                <Text style={{ color: "white", fontSize: 18, marginTop: 10, marginBottom: 10 }} >Murk Zuckerberg's Meta was bought by Yeghishe Karapetyan for 48.9 Billion $ </Text>
                <Text style={{ color: "gray", fontSize: 8, marginTop: 10, marginBottom: 10 }} >05.06.2022 15:27</Text>
            </View>
            <Stock />
        </View>
    )
}

export default News