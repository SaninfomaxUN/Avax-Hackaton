import {getAllLogsApp} from "~/services/web3Connection";
import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {LogPayload} from "~/models/LogPayload";

export const loader = async () => {
    const logs = await getAllLogsApp();
    if (logs.length === 0){
        return json({logs: "No logs"});
    }
    console.log(logs);
    console.log("----");
    return json({logs: logs as LogPayload[]});
}

export default function GetAllLogs() {
    const {logs} = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>Logs:</h1>
            {logs.map((log: LogPayload, index: number) => (
                <div key={index}>
                    <p>Id Log: {log.idLog}</p>
                    <p>Message: {log.message}</p>
                    <p>Date: {log.date}</p>
                    <p>Id Owner: {log.idOwner}</p>
                </div>
            ))}
        </div>
    )
}