import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SessionContext } from "@/lib/context/session-context";

export default function Profile() {
    const { logout } = useContext(SessionContext);

    function handleLogout() {
        Alert.alert(
            "Logout Confirmation",
            "Are you sure you want to logout?",
            [
            { text: "Cancel", style: "cancel" },
            { text: "Logout", onPress: () => logout() }
            ]
        );
    }

    const user = {
        name: "Luis Felipe Gutiérrez",
        username: "luisgutierrez",
        rating: 4.9,
        picture: require("@/assets/images/profile2.jpg"),
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile}>
                <View style={styles.profile_picture_container}>
                    <Image source={user.picture} style={styles.profile_picture} />
                    <Ionicons name="pencil" size={24} color="black" style={styles.edit_icon} />
                </View>
                <View style={styles.profile_info}>
                    <Text style={styles.profile_name}>{user.name}</Text>
                    <Text style={styles.profile_username}>@{user.username}</Text>
                    <View style={styles.profile_rating}>
                        <Ionicons name="star" size={16} color="gold" />
                        <Text style={{ marginLeft: 5 }}>{user.rating}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profile_menu}>
                <Text style={styles.profile_menu_title}>Account</Text>
                <View style={styles.profile_menu_bar}>
                    <TouchableOpacity style={styles.profile_button}>
                        <Ionicons name="settings" size={24} color="#f0f0f0" />
                        <Text style={styles.profile_button_text}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_button}>
                        <Ionicons name="image" size={24} color="#f0f0f0" />
                        <Text style={styles.profile_button_text}>Media</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile_button}>
                        <Ionicons name="shield-checkmark" size={24} color="#f0f0f0" />
                        <Text style={styles.profile_button_text}>Safety</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Pressable onPress={handleLogout}>
                <TouchableOpacity style={styles.logout_button}>
                    <Ionicons name="log-out" size={24} color="#f0f0f0" />
                    <Text style={[styles.profile_button_text, { fontWeight: "bold" }]}>Logout</Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    title: {
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
    },
    profile_picture_container: {
        width: 150,
        height: 150,
    },
    profile_picture: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
    },
    edit_icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        width: 40,
        height: 40,
        padding: 7.5,
        backgroundColor: "#eeeeee",
        borderRadius: 100,
    },
    profile_info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
    },
    profile_name: {
        fontSize: 25,
        fontWeight: "bold",
    },
    profile_username: {
        fontSize: 20,
        color: "gray",
    },
    profile_rating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    profile_menu: {
        width: "100%",
        backgroundColor: "#202020",
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 8,
    },
    profile_menu_title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 20,
    },
    profile_menu_bar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    profile_button: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
        color: "white",
    },
    profile_button_text: {
        marginTop: 2,
        fontSize: 15,
        color: "white",
    },
    logout_button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
    }
});

