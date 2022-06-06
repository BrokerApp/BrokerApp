import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Profile from "./Profile";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Notifications from "./Notifications";
import { StyleSheet } from "react-native";
import News from "./News";

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const PortfolioStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const NewsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Profile" screenOptions={{ tabBarActiveBackgroundColor: "#0b0b0b", tabBarInactiveBackgroundColor: "#0b0b0b", headerShown: false, tabBarActiveTintColor: "#4287f5", tabBarStyle: { borderColor: "#0b0b0b", borderTopColor: "#0b0b0b", borderBottomColor: "#0b0b0b", borderLeftColor: "#0b0b0b", borderRightColor: "#0b0b0b", borderEndColor: "#0b0b0b", borderStartColor: "#0b0b0b" } }} >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarColor: "#0b0b0b", tabBarIcon: ({ focused, color }) => (<SimpleLineIcons name="home" color={focused ? "#4287f5" : "#011d4a"} size={20} />) }} />
            <Tab.Screen name="Portfolio" component={PortfolioStackScreen} options={{ tabBarColor: "#0b0b0b", tabBarIcon: ({ focused, color }) => (<SimpleLineIcons name="briefcase" color={focused ? "#4287f5" : "#011d4a"} size={20} />) }} />
            <Tab.Screen name="News" component={NewsStackScreen} options={{ tabBarColor: "#0b0b0b", tabBarIcon: ({ focused, color }) => (<SimpleLineIcons name="calendar" color={focused ? "#4287f5" : "#011d4a"} size={20} />) }} />
            <Tab.Screen name="Notifications" component={NotificationsStackScreen} options={{ tabBarColor: "#0b0b0b", tabBarIcon: ({ focused, color }) => (<SimpleLineIcons name="bell" color={focused ? "#4287f5" : "#011d4a"} size={20} />) }} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{ tabBarLabel: "Profile", tabBarColor: "#0b0b0b", tabBarIcon: ({ focused, color }) => (<SimpleLineIcons name="user" color={focused ? "#4287f5" : "#011d4a"} size={20} />) }} />
        </Tab.Navigator>
    )
}





const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >
        <HomeStack.Screen name="Home" component={Home} options={{ title: "Home", headerRight: () => (<SimpleLineIcons.Button name="envelope" size={25} backgroundColor="#0b0b0b" color="#4287f5" onPress={() => { navigation.navigate("ChatDir") }} ></SimpleLineIcons.Button>) }} />
    </HomeStack.Navigator>
)

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >

        <ProfileStack.Screen name="Profile" component={Profile} options={{ title: "Profile", headerRight: () => (<MaterialCommunityIcons.Button name="menu" size={25} backgroundColor="#0b0b0b" color="#4287f5" onPress={() => { navigation.navigate("Settings") }} ></MaterialCommunityIcons.Button>) }} />
    </ProfileStack.Navigator>
)

const NotificationsStackScreen = ({ navigation }) => (
    <NotificationsStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >
        <NotificationsStack.Screen name="Notifications" component={Notifications} options={{ title: "Notifications" }} />
    </NotificationsStack.Navigator>
)

const PortfolioStackScreen = ({ navigation }) => (
    <PortfolioStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >
        <PortfolioStack.Screen name="Portfolio" component={Portfolio} options={{ title: "Portfolio", }} />
    </PortfolioStack.Navigator>
)

const NewsStackScreen = () => (
    <NewsStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >
        <NewsStack.Screen name="News" component={News} options={{ title: "News", }} />
    </NewsStack.Navigator>
)

export const SettingsStackScreen = () => (
    <NewsStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0b0b0b", borderBottomColor: "#0b0b0b" }, headerTintColor: "#4287f5", headerTitleStyle: { fontWeight: "bold" }, headerTitleAlign: "center" }} >
        <NewsStack.Screen name="News" component={News} options={{ title: "News", }} />
    </NewsStack.Navigator>
)

export default MainTabScreen;


