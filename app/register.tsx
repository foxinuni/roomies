import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href="/login" style={styles.button}>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  button: {
    backgroundColor: "#101010",
    color: "#f0f0f0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: "center",
  }
});