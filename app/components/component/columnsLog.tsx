import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown} from "lucide-react"
import {Button} from "~/components/ui/button"
import {DropdownActionsLog} from "./dropdownActionsLog";
import {LogPayload} from "~/models/LogPayload";

export const columnsLog = (dataAllPersonas: LogPayload[]): ColumnDef<LogPayload>[] => {
    return [

        {
            accessorKey: "idLog",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Id
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
            cell: ({row}) => <div style={{paddingLeft: '20px'}} className="">{row.getValue("idLog")}</div>,
        },
        {
            accessorKey: "message",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Mensaje
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
            cell: ({row}) => <div style={{paddingLeft: '5px'}}
                                  className="capitalize">{row.getValue("message")}</div>,
        },
        {
            accessorKey: "date",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Fecha y Hora
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
            cell: ({row}) => <div style={{paddingLeft: '20px'}}
                                  className="">{row.getValue("date")}</div>
        },
        {
            id: "actions",

            cell: ({row}) => {
                const personaPayload = row.original;
                return <DropdownActionsLog rowData={personaPayload}/>;
            },
        },

    ]
};
