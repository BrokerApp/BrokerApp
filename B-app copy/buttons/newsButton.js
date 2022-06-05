import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const newsButton = ({
    publisher,
    title,
    exactDate,
    agoDate,
    catchText,
    buttonStyle,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
            }}
            onPress={onPress}>
            <Text style={{ ...styles.title }}>
                {title}
            </Text>
            <Text style={{ ...styles.dateTitle }}>
                {exactDate}
            </Text>

        </TouchableOpacity>

    );
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#02000d",
        alignItems: "flex-start",
        marginTop: 5, paddingLeft: 30,
        justifyContent: "center",
        borderRadius: 12
    },
    title: {
        color: "white",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    dateTitle: {
        color: "gray",
        fontSize: 8,
        marginTop: 10,
        marginBottom: 10
    }
});
export default newsButton;