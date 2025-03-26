import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image } from "expo-image";
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";

export default function Information() {
    const [username, setUsername] = React.useState("");
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [birthdate, setBirthdate] = React.useState("");

    function handleNext() {
        console.log("Username:", username);
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("Birthdate:", birthdate);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile}>
                <View style={styles.profile_picture_container}>
                    <Image source={require("@/assets/images/default-avatar.jpg")} style={styles.profile_picture} />
                    <Ionicons name="pencil" size={24} color="black" style={styles.edit_icon} />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor={"#f0f0f0"}
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={"#f0f0f0"}
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    placeholderTextColor={"#f0f0f0"}
                    value={surname}
                    onChangeText={setSurname}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Birthdate (YYYY-MM-DD)"
                    placeholderTextColor={"#f0f0f0"}
                    value={birthdate}
                    onChangeText={setBirthdate}
                />

                <Pressable onPress={handleNext}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "#f0f0f0" }}>Next</Text>
                        </TouchableOpacity>
                </Pressable>
            </View>
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
        marginBottom: 25,
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
    input: {
        backgroundColor: "#404040",
        color: "#f0f0f0",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: "90%",
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
