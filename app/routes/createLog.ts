import {ActionFunctionArgs, json, LoaderFunction, redirect} from "@remix-run/node";
import {createLogApp} from "~/services/web3Connection";


export async function action({request,}: ActionFunctionArgs) {
    const body = await request.json();
    console.log(body);
    const message = body.message;
    const todo = await createLogApp(message as string);

    return redirect(`/createLog/${todo}`);
}


export const loader: LoaderFunction = async () => {
    return json({message: "Log created successfully"});
}