import {json, MetaFunction, redirect} from "@remix-run/node";
import {TableLogs} from "~/components/component/table-logs";
import {LogPayload} from "~/models/LogPayload";
import {getAllLogsApp} from "~/services/web3Connection";
import {useLoaderData} from "@remix-run/react";
import {supabase} from "~/utils/supabaseClient";

export const meta: MetaFunction = () => {
    return [{title: "Dashboard"}, {name: "description", content: "Dashboard page"}];
}

export const loader = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
        return redirect("/login");
    }

    const logs = await getAllLogsApp();
    if (logs.length === 0){
        return json({logs: []});
    }
    return json({logs: logs as LogPayload[]});
}

export default function Dashboard() {
    const {logs} = useLoaderData<typeof loader>();
    return (
        <div className="flex-grow container mx-auto p-4 flex items-center justify-center">
            <div className="w-full">
                <TableLogs dataAllLog={logs}/>
            </div>
        </div>
    );
}