import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Pressable, Touchable, TouchableOpacity, Alert } from "react-native";
import { UserFormContext } from "./_layout";
import { Ionicons } from "@expo/vector-icons";
import { UserRole } from "@/lib/entities/user";
import { upsertSelf } from "@/lib/services/user-service";

export default function Finish() {
    const { user } = React.useContext(UserFormContext);
    const [disabled, setDisabled] = React.useState(false);
    
    function handleFinish(role: UserRole) {
        setDisabled(true);

        const new_user = { ...user, role };
        
        // Save user to the database
        upsertSelf(new_user).then(() => {
            Alert.alert("Success", "Your account has been created successfully!");
        }).catch((error) => {
            Alert.alert("Error", error.message);
        }).finally(() => {
            setDisabled(false);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Type</Text>
            <Text style={styles.subtitle}>Just one more step! Your account is almost ready.</Text>

            <View style={styles.selection}>
                <Pressable onPress={() => handleFinish(UserRole.User)} disabled={disabled}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="person" size={18} color="#f0f0f0" />
                        <Text style={{ color: "#f0f0f0" }}>Student</Text>
                    </TouchableOpacity>
                </Pressable>

                <Pressable onPress={() => handleFinish(UserRole.Owner)} disabled={disabled}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="home" size={18} color="#f0f0f0" />
                        <Text style={{ color: "#f0f0f0" }}>Owner</Text>
                    </TouchableOpacity>
                </Pressable>
            </View>
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
    selection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#101010",
        color: "#f0f0f0",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginHorizontal: 10,

        width: 100,
    }
});
