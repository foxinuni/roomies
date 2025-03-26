import React, { createContext, useState, useContext, useEffect } from 'react';
import { getSession, sessionUpdateCallback, signIn, signOut, signUp } from '../services/auth-service';
import { Session } from '@supabase/supabase-js';

export interface SessionContextType {
    session: Session | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    authenticated: () => boolean;
}

export const SessionContext = createContext<SessionContextType>({} as SessionContextType);

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        // Fetch the session when the component mounts
        getSession().then(setSession);

        // Listen for changes to the session
        sessionUpdateCallback(session => {
            setSession(session);
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

    return (
        <SessionContext.Provider value={{ session, login, register, logout, authenticated } as SessionContextType}>
            {children}
        </SessionContext.Provider>
    );
};

