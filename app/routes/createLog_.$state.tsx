import {json} from "@vercel/remix";
import {useLoaderData} from "@remix-run/react";

interface Params {
    state: string;
}

export const loader = async ({params}: { params: Params }) => {
    let state = "";
    if (params.state) {
        state = params.state;
    }

    return json({ state });
}


export default function CreateLogState() {
    const {state} = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>State: {state}</h1>
        </div>
    )
}