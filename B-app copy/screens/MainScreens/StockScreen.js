
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";

const StockScreen = () => {
    const [stockPrice, setStockPrice] = useState("")
    const [stockName, setStockName] = useState("")
    const [priceChange, setPriceChange] = useState("")

    function toFixedPrice(num, fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
    }


    const renderButtons = () => {
        const views = []

        let stockList = ["TSLA", "AAPL", "AMZN", "DOW"]


        const listStock = stockList[0]

        let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + listStock + '&apikey=A3EMQP6CDDJXUWYN';




        const fetchData = async () => {
            const response = await fetch(API_Call)
            const json = await response.json()

            const data = json['Meta Data']['2. Symbol']
            setStockName(data)

            let firstElement = Object.keys(json['Time Series (Daily)'])[0]
            let secondElement = Object.keys(json['Time Series (Daily)'])[1]

            let tempStockPrice = json['Time Series (Daily)'][secondElement]['1. open']
            let stockLastPrice = json['Time Series (Daily)'][firstElement]['1. open']


            //search dot in price
            let dotPos = stockLastPrice.search(/\./) + 3

            //return number with fixed dot


            setPriceChange(toFixedPrice(tempStockPrice - stockLastPrice, 2))


            setStockPrice(stockLastPrice.substring(0, dotPos))


            // setStockName(Object.keys(json['Meta Data']['2. Symbol']))

        }
        useEffect(() => {
            fetchData()
        }, [])

        views.push(

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
                        <View style={{ flexDirection: "row", justifyContent: "space-between", }} >

                            <Text style={{ color: "white", fontSize: 28, alignItems: "center", justifyContent: "center" }} >Amazon</Text>
                            <Text style={{ color: "white", fontSize: 28, marginRight: 20, marginTop: 5, marginBottom: 2 }}> {stockPrice} $</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }} >
                            <Text style={{ color: "gray", fontSize: 24, }} >{stockName}</Text>
                            <Text style={{ backgroundColor: priceChange >= 0 ? "#09ad00" : "#ad0000", fontSize: 22, marginRight: 20, color: "white", borderRadius: 10, }}> {priceChange} $ </Text>
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


        return views;
    }




    return (


        <View style={{ backgroundColor: "#030012", flex: 1, alignItems: "center", width: "100%", borderBottomColor: "gray" }} >

            {
                //if(screen == home)
                renderButtons()
                //
            }
        </View>



    );

}


export default StockScreen;

