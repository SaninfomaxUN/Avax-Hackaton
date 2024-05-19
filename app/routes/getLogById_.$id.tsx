import {json} from "@remix-run/node";
import {getLogByIdApp} from "~/services/web3Connection";
import {useLoaderData} from "@remix-run/react";

interface Params {
    id: string;
}

export const loader = async ({params}: {params: Params}) => {
    let id = "";
    if (params.id) {
        id = params.id;
    }
    const log = await getLogByIdApp(id);
    console.log(log);
    return json({log});
}

export default function GetLogById() {
    const {log} = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>Log: {log}</h1>
        </div>
    )
}