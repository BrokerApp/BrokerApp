import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", backgroundColor: "#eb4034", flexDirection: "column" }} >
        <StatusBar barStyle="light-content" backgroundColor="#191914" />
        <View style={{ height: 50, }} />
        <Image source={require("./assets/icon.png")} style={{ width: 150, height: 150, }} />

        <View style={{ justifyContent: "flex-end" }} >
          <Text style={{ marginRight: 11, backgroundColor: "#eb4034", color: "black", borderRadius: 11, fontSize: 28, marginBottom: 20 }}> finfriend </Text>
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
