import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createNativeStackNavigator()

const RegisterScreen = ({ navigation }) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");




    const [data, setData] = React.useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUsername: true,
        isValidEmail: true,
        isValidPassword: true,
    });


    const register = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: userName,
                    photoURL: imageUrl || "https://firebasestorage.googleapis.com/v0/b/broker-app-202ae.appspot.com/o/24-248253_user-profile-default-image-png-clipart-png-download.png?alt=media&token=97cd489c-198f-43e1-9265-58a0c8066982",
                    email: email,
                    uid: userName,

                });
            })
            .catch((err) => {
                setData({
                    ...data,
                    isValidEmail: false
                })
            })
    }


    //         .then(
    //             updateProfile(auth, {
    //                 displayName: userName,
    //                 photoURL: imageUrl || "https://firebasestorage.googleapis.com/v0/b/broker-app-202ae.appspot.com/o/24-248253_user-profile-default-image-png-clipart-png-download.png?alt=media&token=97cd489c-198f-43e1-9265-58a0c8066982",
    //                 email: email,
    //                 uid: userName,

    //             })

    //         )
    //         .catch((err) => {
    //             setData({
    //                 ...data,
    //                 isValidEmail: false
    //             })
    //         })
    // }



    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }


    const textInputChangePassword = () => {
        if (password.length >= 7) {
            setData({
                ...data,
                isValidPassword: true,
            })
        } else {
            setData({
                ...data,
                isValidPassword: false
            })
        }
    }



    return (
        <View behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#191914" />
            <Text style={{ color: "orange", fontSize: 28, fontWeight: "bold" }}>Register</Text>
            <View style={styles.inputContainer}>
                {/* <View style={styles.inputField} >
                        <TextInput placeholder="Name/Surname" style={styles.textInput} value={name} autoCapitalize="none" autoFocus onChangeText={(text) => setName(text.trim())} />
                    </View> */}
                <View style={styles.inputField}>
                    <TextInput placeholder="Username" style={styles.textInput} value={userName} autoCapitalize="none" onChangeText={(text) => { setUserName(text.trim().toLowerCase()) }} />
                </View>
                {data.isValidUsername ? null :
                    <Text style={styles.errorMsg}>Username already in use</Text>
                }
                <View style={styles.inputField}>
                    <TextInput placeholder="E-mail" style={styles.textInput} value={email} autoCapitalize="none" onChangeText={(text) => { setEmail(text.trim().toLowerCase()) }} type="email" />
                </View>
                {data.isValidEmail ? null :
                    <Text style={styles.errorMsg}>Email is badly formed or has already used</Text>
                }

            </View>
            <View style={styles.inputField} >
                <TextInput placeholder="Password" style={styles.textInput} value={password} autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false} onChangeText={(text) => {
                    setPassword(text)
                    textInputChangePassword()
                }} />

                <View style={{ marginRight: 10 }} >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={data.secureTextEntry ? "eye-off" : "eye"} onPress={updateSecureTextEntry} color="orange" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            {data.isValidPassword ? null :
                <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
            }
            <View style={styles.inputField} >
                <TextInput placeholder="Confirm Password" style={styles.textInput} value={confirmPassword} autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false} onChangeText={(text) => {
                    setConfirmPassword(text)
                    textInputChangePassword()
                }} />

                <View style={{ marginRight: 10 }} >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={data.secureTextEntry ? "eye-off" : "eye"} onPress={updateSecureTextEntry} color="orange" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            {password == confirmPassword ? null :
                <Text style={styles.errorMsg}>Passwords must match</Text>
            }
            <Button onPress={register} disabled={!userName || !email || password.length < 8 || confirmPassword.length < 8 || password != confirmPassword} containerStyle={[styles.button, { marginTop: 20 }]} buttonStyle={{ backgroundColor: "orange", width: 290, borderRadius: 11 }} title="Sign up" />

            <View style={{ height: 20 }} />

        </View>

    )
}

const Tabs = () => {
    return (
        <RegisterScreen />

    )
}


export default Tabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191914"
    },
    inputContainer: {
        width: 300
    },
    inputField: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 21,
        marginTop: 15,
        width: 300,
        height: 50,
    },
    textInput: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "#000",
        height: 50,
        alignItems: "center"
    },
    button: {
        marginTop: 45
    },
    errorMsg: {
        color: "#ff2626",
        marginTop: 2,
        marginLeft: 10,
        marginBottom: -5
    }

})
