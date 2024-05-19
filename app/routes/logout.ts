import {supabase} from "~/utils/supabaseClient";
import {json, redirect} from "@remix-run/node";

export const loader = async () => {
    const { error } = await supabase.auth.signOut();

    redirect("/login");

    return json({});
}