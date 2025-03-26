import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabase";

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
}

export async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getSession(): Promise<Session | null> {
    const { data } = await supabase.auth.getSession();
    return data.session;
}

export async function sessionUpdateCallback(callback: (session: Session | null) => void) {
    return supabase.auth.onAuthStateChange((_, session) => callback(session));
}
