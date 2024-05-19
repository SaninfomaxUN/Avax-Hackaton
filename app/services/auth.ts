import {supabase} from "~/utils/supabaseClient";

export const authUser = async (email: string, password: string): Promise<boolean> => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    return !error;


}