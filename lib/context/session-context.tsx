import React, { createContext, useState, useContext, useEffect } from 'react';
import { getSession, sessionUpdateCallback, signIn, signOut, signUp } from '../services/auth-service';
import { Session } from '@supabase/supabase-js';
import { User } from '../entities/user';
import { getSelf } from '../services/user-service';

export interface SessionContextType {
    user?: User;
    session?: Session;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    authenticated: () => boolean;
    refresh: () => Promise<void>;
}

export const SessionContext = createContext<SessionContextType>({} as SessionContextType);

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Fetch the session when the component mounts
        getSession().then(session => {
            setSession(session);

            if (session) {
                getSelf().then(setUser);
            } else {
                setUser(null);
            }
        });

        // Listen for changes to the session
        sessionUpdateCallback(session => {
            setSession(session);

            if (session) {
                getSelf().then(setUser);
            } else {
                setUser(null);
            }
        });
    }, []);

    async function login(email: string, password: string) {
        return signIn(email, password)
    }

    async function register(email: string, password: string) {
        return signUp(email, password)
    }

    async function logout() {
        return signOut();
    }

    function authenticated() {
        return session !== null;
    }

    async function refresh() {
        const user = await getSelf();
        setUser(user);
    }

    return (
        <SessionContext.Provider value={{user, session, login, register, logout, authenticated, refresh } as SessionContextType}>
            {children}
        </SessionContext.Provider>
    );
};

