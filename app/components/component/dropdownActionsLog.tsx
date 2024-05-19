import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import {Button} from "~/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {Dialog, DialogTrigger} from "@radix-ui/react-dialog";
import '../styles/dropdownActions.css'
import {LogPayload} from "~/models/LogPayload";

export function DropdownActionsLog({rowData}: { rowData: LogPayload}) {
    // Function to download data as a text file
    const downloadData = (data: string, filename: string) => {
        const blob = new Blob([data], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <Dialog>
                    <DialogTrigger>
                        <DropdownMenuItem className="delete-option" onSelect={(e) => {
                            e.preventDefault();
                            // Download the 'message' attribute of rowData as a text file
                            downloadData(rowData.message, 'log-' + rowData.date + '.txt');
                        }}>
                            Descargar
                        </DropdownMenuItem>
                    </DialogTrigger>

                </Dialog>
                <DropdownMenuSeparator/>


            </DropdownMenuContent>
        </DropdownMenu>

    )
}