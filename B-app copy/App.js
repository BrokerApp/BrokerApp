import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10000)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", backgroundColor: "#191914", flexDirection: "column" }} >
        <View style={{ height: 50, }} />
        {/* <Image source={require("./assets/icon.png")} style={{ width: 150, height: 150, }} /> */}
        <Text style={{ fontWeight: "bold", fontSize: 48, color: "orange" }} >F</Text>

        <View style={{ justifyContent: "flex-end" }} >
          <Text style={{ marginRight: 11, backgroundColor: "#191914", color: "orange", borderRadius: 11, fontSize: 28, marginBottom: 20 }}> finfriend® </Text>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Text>Text 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
