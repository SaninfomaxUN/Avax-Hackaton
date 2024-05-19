import {supabase} from "~/utils/supabaseClient";


export const signup = async (email: string, password: string) => {
    const {data, error} = await supabase.auth.signUp({email, password});
    console.log(data);
    if (error) {
        console.log(error.message);
        return false;
    }
    return true;
}