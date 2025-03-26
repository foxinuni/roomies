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
    const { authenticated, user } = useContext(SessionContext);

    useEffect(() => {
        // Dismiss all routes (prevents user from going back)
        if (router.canDismiss()) {
            router.dismissAll();
        }

        // If the user is authenticated, make sure it's initialized
        if (authenticated()) {
            if (user) {
                router.replace("/(tabs)/search");
            } else {
                router.replace("./account");
            }
        } else {
            router.replace("/");
        }
    }, [authenticated, user, router]);

    return (
        <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName={authenticated() ? "(tabs)" : "index"}
        >
            {authenticated() ? (
                <>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="account" options={{ title: "Account" }} />
                </>
            ) : (
                <>
                    <Stack.Screen name="login" options={{ title: "Login" }} />
                    <Stack.Screen name="register" options={{ title: "Register" }} />
                    <Stack.Screen name="index" options={{ title: "index" }} />
                </>
            )}
        </Stack>
    )
}
