import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../entities/user';
import { SessionContext } from './session-context';
import { getSelf } from '../services/user-service';

export interface UserContextType {
    user?: Partial<User>;
    cachedUser?: Partial<User>;
    update: (user: Partial<User>) => void;
    push: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const { session, authenticated } = useContext(SessionContext);
    const [user, setUser] = useState<Partial<User>>();
    const [cachedUser, setCachedUser] = useState<Partial<User>>();

    useEffect(() => {
        if (authenticated()) {
            try {
                getSelf().then((user) => {
                    if (user) {
                        setCachedUser(user);
                        setUser(user);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
    }, [session, authenticated]);

    function update(user: Partial<User>) {
        setUser(user);
    }

    async function push() {
        // Push the user to the database
        return Promise.resolve();
    }

    return (
        <UserContext.Provider value={{ user, cachedUser, update, push } as UserContextType}>
            {children}
        </UserContext.Provider>
    );
};

