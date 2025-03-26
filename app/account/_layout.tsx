import { User } from "@/lib/entities/user";
import { Stack } from "expo-router";
import React from "react";

interface UserFormContextType {
    user: User;
    setUser: (user: User) => void;
}

export const UserFormContext = React.createContext({} as UserFormContextType);

export default function RegisterLayout() {
    const [user, setUser] = React.useState({} as User);


    return (
        <UserFormContext.Provider value={{ user, setUser }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ title: "index" }} />
                <Stack.Screen name="information" options={{ title: "Information" }} />
                <Stack.Screen name="document" options={{ title: "Document" }} />
                <Stack.Screen name="finish" options={{ title: "Finish" }} />
            </Stack>
        </UserFormContext.Provider>
    );
}
