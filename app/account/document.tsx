import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { DocumentType } from "@/lib/entities/user";
import DropDownPicker from "react-native-dropdown-picker";
import { router } from "expo-router";
import { UserFormContext } from "./_layout";

export default function Document() {
    const { user, setUser } = useContext(UserFormContext);

    const [document, setDocument] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState("");
    const [items, setItems] = React.useState([
        { label: "Cedula Ciudadana", value: DocumentType.CC },
        { label: "Documento de Identidad", value: DocumentType.DI},
        { label: "Pasaporte", value: DocumentType.PASS },
    ]);


    useEffect(() => {
        setDocument(user.document_value ?? "");
        setValues(user.document_type ?? DocumentType.CC);
    }, [user]);

    function handleNext() {
        setUser({
            ...user,
            document_value: document,
            document_type: values as DocumentType,
        });

        router.push("/account/finish");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Identification</Text>
            <View style={styles.profile}>
                <DropDownPicker
                    open={open}
                    value={values}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValues}
                    setItems={setItems}
                    placeholder="Select a document type"
                    style={styles.dropdown}
                    textStyle={{ color: "#f0f0f0" }}
                    dropDownContainerStyle={{ backgroundColor: "#404040" }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Documento"
                    placeholderTextColor={"#f0f0f0"}
                    value={document}
                    onChangeText={setDocument}
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
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    title: {
        width: "100%",
        textAlign: "left",
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
        width: "90%",
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
        width: "100%",
    },
    dropdown: {
        backgroundColor: "#404040",
        color: "#f0f0f0",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: "100%",
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
