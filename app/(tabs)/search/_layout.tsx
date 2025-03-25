import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Search" }} />
      <Stack.Screen name="display" options={{ title: "Display" }} />
    </Stack>
  );
}
