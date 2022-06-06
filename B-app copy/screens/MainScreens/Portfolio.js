import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";
import { Button } from 'react-native-elements';

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

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={{ backgroundColor: "#030012", flex: 1, }} >


            <View style={{ backgroundColor: "#030000", flex: 1 }} >
                <View >

                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May",],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,

                                    ]
                                }
                            ]
                        }}

                        width={Dimensions.get("window").width} // from react-native
                        height={Dimensions.get("window").height * 0.4}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{

                            backgroundColor: "#001029",
                            backgroundGradientFrom: "#000d21",
                            backgroundGradientTo: "#001029",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

                            propsForDots: {
                                r: "4",
                                strokeWidth: "2",
                                stroke: "#000d21",

                            }
                        }}

                        style={{
                            marginVertical: 1,

                        }}
                    />
                </View>
                <View style={{ width: "100%", backgroundColor: "#191914", paddingLeft: 30, borderBottomColor: "#454545", borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 10 }} >
                    <Text style={{ color: "white", fontSize: 28, alignItems: "center", justifyContent: "center" }} >Amazon</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <Text style={{ color: "gray", fontSize: 24, }} >AMZN</Text>
                        <Text style={{ backgroundColor: z >= 0 ? "#09ad00" : "#ad0000", fontSize: 24, marginRight: 10, color: "white", borderRadius: 10, marginBottom: 10 }}> {z} $ </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }} >

                    <TouchableOpacity style={{ backgroundColor: "#d41c1c", width: "48%", borderRadius: 12 }} >
                        <Text style={{ color: "white", fontSize: 30, paddingTop: 5, paddingBottom: 5, alignSelf: "center" }}>Sell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#24c92a", width: "48%", borderRadius: 12 }} >
                        <Text style={{ color: "white", fontSize: 30, paddingTop: 5, paddingBottom: 5, alignSelf: "center", }}>Buy</Text>
                    </TouchableOpacity>
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
