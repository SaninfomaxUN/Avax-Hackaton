import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import {json, LinksFunction} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import NavbarUI from "~/components/component/ui/navbar";
import React from "react";
import { supabase } from './utils/supabaseClient';
import { useState, useEffect } from 'react';

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: stylesheet},

];

export const loader = async () => {
    const { data, error } = await supabase.auth.getSession()

    return json({auth: !error});
}

export function Layout({children}: { children: React.ReactNode }) {
    const { auth } = useLoaderData<typeof loader>();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setUser(session?.user ?? null);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>

        </head>
        <body className="flex flex-col w-full min-h-screen background">
        <NavbarUI auth={auth}/>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}
