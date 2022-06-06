import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import RootStackScreen from './screens/LRR/RootStackScreen';
import Home from "./screens/MainScreens/Home"
import Notifications from "./screens/MainScreens/Notifications"
import Profile from "./screens/MainScreens/Profile"
import Portfolio from "./screens/MainScreens/Portfolio"
import MainTabScreen, { NewsStackScreen, NotificationsStackScreen, SettingsStackScreen } from './screens/MainScreens/TabScreens';
import News from './screens/MainScreens/News';
import Settings from './screens/SubScreens/Settings';
import Accounting from './screens/MainScreens/Accounting';


const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ loggedIn: false })

  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        callback({ loggedIn: true })
      } else {
        callback({ loggedIn: false })
      }
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  //dxrk-rave
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", backgroundColor: "#191914", flexDirection: "column" }} >
        <View style={{ height: 50, }} />
        {/* <Image source={require("./assets/icon.png")}  style={{ width: 150, height: 150, }} /> */}
        <Text style={{ fontWeight: "bold", fontSize: 48, color: "#4287f5" }} >F</Text>

        <View style={{ justifyContent: "flex-end" }} >
          <Text style={{ marginRight: 11, backgroundColor: "#191914", color: "#4287f5", borderRadius: 11, fontSize: 28, marginBottom: 20 }}> finfriend® </Text>
        </View>
      </View>
    )
  }


  if (!user.loggedIn) {

    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0b0b0b" />
        <RootStackScreen />

      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer  >
        <StatusBar barStyle="light-content" backgroundColor="#030012" />
        <Stack.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <DrawerContent {...props} />}  >
          <Stack.Screen name="Home" component={MainTabScreen} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Notifications" component={NotificationsStackScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={SettingsStackScreen} />
          <Stack.Screen name="Accounting" component={Accounting} />
        </Stack.Navigator>

      </NavigationContainer>
    )

  }
}



export default App;
