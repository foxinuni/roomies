import { Stack } from "expo-router";
import React from "react";

export default function RegisterLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: "index" }} />
            <Stack.Screen name="information" options={{ title: "Information" }} />
        </Stack>
    );
}
