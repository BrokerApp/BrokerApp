import React, { useState } from "react";
import { View, Text, TextInput, StatusBar, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";



const ResetPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");


    const resetPassword = () => {


        sendPasswordResetEmail(auth, email).then(() => {
        })
            .catch(err => setError("Wrong E-mail"))
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#191914" />
            <Text style={{ color: "#cf3f02", fontSize: 28, fontWeight: "bold" }} >Reset Password</Text>
            <View style={styles.inputContainer} >
                <View style={styles.inputField} >
                    <TextInput placeholder="Write your E-mail" style={styles.textInput} value={email} onChangeText={(email) => { setEmail(email.trim().toLowerCase()) }} />
                </View>
            </View>
            <Button disabled={email.length < 4} containerStyle={[styles.button, { marginTop: 15 }]} buttonStyle={{ backgroundColor: "#cf3f02", width: 290, borderRadius: 11 }} title="Reset Password" onPress={() => resetPassword()} />
            {error.length > 0 && <Text>{error}</Text>}
            <View style={{ height: 70 }} />
        </View>
    )
}

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191914",
    },
    inputContainer: {
        width: 300,
    },
    inputField: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        marginTop: 15,
        borderRadius: 21,
        width: 300,
        height: 50,
    },
    textInput: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        height: 50,
        color: "#000",
        alignItems: "center",
    },
    button: {
        marginTop: 45
    }
})
