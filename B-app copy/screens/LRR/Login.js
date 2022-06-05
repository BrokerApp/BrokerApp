import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform, Image, StatusBar } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Button } from "react-native-elements"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((err) => {
                setError("Wrong E-mail or Password")
            })
    }

    const [data, setData] = React.useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View behavior="padding" style={styles.container} >
            <StatusBar barStyle="light-content" backgroundColor="#191914" />
            {/* <Image style={styles.logo} />  */}
            <View style={{ height: 20 }} />
            <Text style={{ color: "orange", fontSize: 28, fontWeight: "bold" }}>Login</Text>
            <View style={styles.inputContainer} >
                <View style={styles.inputField} >
                    <TextInput placeholder="E-mail" style={styles.textInput} autoCapitalize="none" autoFocus value={email} onChangeText={(text) => { setEmail(text.trim().toLowerCase()) }} />
                </View>
            </View>
            <View style={styles.inputField}>
                <TextInput placeholder="Password" style={styles.textInput} autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false} value={password} onChangeText={(text) => setPassword(text)} />
                <View style={{ marginRight: 10 }} >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={data.secureTextEntry ? "eye-off" : "eye"} onPress={updateSecureTextEntry} color="orange" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <Button onPress={signIn} disabled={email.length < 4 || password.length < 8} containerStyle={[styles.button, { marginTop: 20 }]} buttonStyle={{ backgroundColor: "orange", width: 290, borderRadius: 11 }} title="Sign in" />
            {error.length > 0 && <Text style={styles.errorMsg} >{error}</Text>}
            <Button onPress={() => navigation.navigate("Register")} containerStyle={[styles.button, { marginTop: 10 }]} buttonStyle={{ backgroundColor: "orange", width: 290, borderRadius: 11 }} title="Register" />
            <Button onPress={() => navigation.navigate("ResetPassword")} containerStyle={[styles.button, { marginTop: 10, justifyContent: "center", marginBottom: 25 }]} type="clear" buttonStyle={{ width: 250 }} titleStyle={{ color: "white" }} title="Forget password ?" />
            {/* <View style={{ alignItems: "center", }} >
                <TouchableOpacity style={{ backgroundColor: "#c7d7ff", width: 280, height: 40, justifyContent: "center", marginBottom: 8, borderRadius: 10 }} >
                    <View style={{ flexDirection: "row", marginRight: 35 }} >
                        <Icon name="facebook-f" size={25} color="#4267B2" style={{ justifyContent: "flex-start", marginLeft: 10 }} />
                        <View style={{ alignItems: "center", justifyContent: "space-between", marginLeft: 50 }} >
                            <Text style={{ alignItems: "center", marginTop: 2, color: "#4267B2", fontWeight: "700" }} >Sign in with Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#ffc7c7", width: 280, height: 40, justifyContent: "center", borderRadius: 10 }} >
                    <View style={{ flexDirection: "row", marginRight: 35 }} >
                        <Icon name="google" size={25} color="#BB001B" style={{ justifyContent: "flex-start", marginLeft: 10 }} />
                        <View style={{ alignItems: "center", justifyContent: "space-between", marginLeft: 50 }} >
                            <Text style={{ alignItems: "center", marginTop: 2, color: "#BB001B", fontWeight: "700" }} >Sign in with Google</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View> */}


        </View>

    )
}

export default LoginScreen;

// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#191914",
    },

    inputContainer: {
        width: 300
    },
    // logo: {
    //     width: height_logo,
    //     height: height_logo
    // },
    button: {
        marginTop: 45,
    },
    inputField: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 50,
        backgroundColor: "#f2f2f2",
        borderRadius: 21,
        marginTop: 15

    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === "ios" ? 0: -12,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#000",
        height: 50,
        alignItems: "center",

    },
    button: {
        alignItems: "center",
        marginTop: 5,
        flexDirection: "column"
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    errorMsg: {
        color: "#ff2626",
        marginTop: 2,
        marginBottom: 1,
    }

})


