import React, { useState } from 'react';
import { Text, View } from 'react-native';

class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockLastPrice: "",
            stockNameInfo: "",
            stockPriceChange: ""
        }
    }
    componentDidMount() {
        this.fetchStock();
    }
    fetchStock() {
        let API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=A3EMQP6CDDJXUWYN';
        let stockNameInfo = "";
        let stockLastPrice = "";
        let stockPriceChange = "";


        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);
                    stockNameInfo = data['Meta Data']['2. Symbol'];
                    let length = (Object.keys(data['Time Series (Daily)']).length)

                    let firstElement = Object.keys(data['Time Series (Daily)'])[0]
                    let secondElement = Object.keys(data['Time Series (Daily)'])[1]

                    stockLastPrice = data['Time Series (Daily)'][firstElement]['1. open']

                    let tempStockPrice = data['Time Series (Daily)'][secondElement]['1. open']

                    stockPriceChange = tempStockPrice - stockLastPrice;


                    console.log(stockPriceChange)
                }
            )
    }

    render() {

        //function for checking color of the text red or green
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}
export default Stock;