import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "index" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}
