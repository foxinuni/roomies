import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.logo}>Roomies</Text>
        </View>
        <View style={styles.controls}>
            <Link href="/login" style={styles.button}>Login</Link>
            <Link href="/register" style={styles.button}>Register</Link>
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E9ED69",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 40,
        fontWeight: "800",
    },
    controls: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    button: {
        backgroundColor: "#101010",
        color: "#f0f0f0",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        textAlign: "center",
        width: "75%",
        minWidth: 200,
    }
});
