import React from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";


export default function Information() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Roomies!</Text>
            <Text style={styles.subtitle}>
                We need a bit more information to get started. Press the "Next" button to fill it out.
            </Text>
            <Pressable onPress={() => router.push("/account/information")}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "#f0f0f0" }}>Next</Text>
                    </TouchableOpacity>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 20,
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
