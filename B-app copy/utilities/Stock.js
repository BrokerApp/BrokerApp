
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native'

const Stock = () => {
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

            <View style={{ width: "100%", backgroundColor: "#030000", height: 70, marginTop: 10, paddingLeft: 30, justifyContent: "center", borderBottomColor: "#454545", borderBottomWidth: 0.5 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{ color: "white", fontSize: 28, }} >Amazon.com</Text>
                    <Text style={{ color: "white", fontSize: 28, marginRight: 10 }}> {stockPrice} $</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <Text style={{ color: "gray", fontSize: 13 }} >{stockName}</Text>
                    <Text style={{ backgroundColor: priceChange >= 0 ? "#09ad00" : "#ad0000", fontSize: 20, marginRight: 10, color: "white", borderRadius: 10, marginBottom: 5 }}> {priceChange} $ </Text>
                </View>
            </View>



        )


        return views;
    }



    return (


        <View style={{ backgroundColor: "#030012", flex: 1, alignItems: "center", width: "100%", borderBottomColor: "gray" }} >
            {renderButtons()}
        </View>



    );

}


export default Stock;

