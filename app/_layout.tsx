import React, { useContext, useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import { SessionContext, SessionProvider } from "@/lib/context/session-context";

export default function RootLayout() {
    return (
        <SessionProvider>
            <AuthStack />
        </SessionProvider>
    );
}

function AuthStack() {
    const { authenticated } = useContext(SessionContext);

    useEffect(() => {
        // Dismiss all routes (prevents user from going back)
        if (router.canDismiss()) {
            router.dismissAll();
        }

        if (authenticated()) {
            router.replace("/(tabs)/search");
        } else {
            router.replace("/");
        }
    }, [authenticated, router]);

    return (
        <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName={authenticated() ? "(tabs)" : "index"}
        >
            {authenticated() ? (
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            ) : (
                <>
                    <Stack.Screen name="login" options={{ title: "Login" }} />
                    <Stack.Screen name="index" options={{ title: "index" }} />
                </>
            )}
        </Stack>
    )
}
