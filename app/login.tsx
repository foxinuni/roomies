import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.logo}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"#f0f0f0"} />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                placeholderTextColor={"#f0f0f0"} 
                secureTextEntry={true} 
            />
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Link href="/(tabs)/search" style={{ color: "#f0f0f0" }}>Login</Link>
            </TouchableOpacity>
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
        marginBottom: 40,
    },
    form: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: "#404040",
        color: "#f0f0f0",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: "90%",
    },
    forgot: {
        color: "#505050",
        fontSize: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#101010",
        color: "#f0f0f0",
        
        display: "flex",
        justifyContent: "center",
        textAlign: "center",

        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    }
});
