import { User } from "../entities/user";
import { supabase } from "../supabase";
import { getSession } from "./auth-service";

export async function getSelf(): Promise<User | null> {
    const session = await getSession();
    if (!session) {
        return null;
    }

    const { data, error, status } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single();

    if (error && status !== 406) {
        throw error;
    }

    return data as User;
}

export async function upsertSelf(user: User): Promise<User> {
    const session = await getSession();
    if (!session) {
        throw new Error('User not authenticated');
    }

    user.id = session.user.id;

    const { data, error } = await supabase
        .from('users')
        .upsert(user, { onConflict: 'id' })
        .single();

    if (error) {
        throw error;
    }

    return data as User;
}