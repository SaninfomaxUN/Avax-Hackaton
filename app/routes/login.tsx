// app/routes/login.tsx
import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import {ActionFunctionArgs, json, redirect} from "@remix-run/node";
import {signup} from "~/services/singup";
import {supabase} from "~/utils/supabaseClient";

export const action = async ({request,}: ActionFunctionArgs) => {
    const body = await request.formData();
    const email = body.get("email");
    const password = body.get("password");
    const redirectFunction = await signup(email as string, password as string);
    if (redirectFunction) {
        return redirect("/dashboard");
    } else {
        return redirect("/login");
    }
}

export const loader = async () => {

    const { data, error } = await supabase.auth.getSession()
    if (!error) {
        return redirect("/dashboard");
    }
    return json({});
}

export default function Login() {

    return (
        <div className="bg-gray-50 font-[sans-serif] text-[#333]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
                    <h2 className="text-center text-3xl font-extrabold">
                        Iniciar Sesión
                    </h2>
                    <form className="mt-10 space-y-4" action="/login" method="post">
                        <div>
                            <input name="email" type="email" autoComplete="email" required
                                   className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                                   placeholder="Direccion de Correo"/>
                        </div>
                        <div>
                            <input name="password" type="password" autoComplete="current-password" required
                                   className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                                   placeholder="Contraseña"/>
                        </div>
                        <div className="!mt-10">
                            <button type="submit"
                                    className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}