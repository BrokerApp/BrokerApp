import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Register from "./Register"
import ResetPassword from "./ResetPassword";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} >
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="ResetPassword" component={ResetPassword} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen;

