"use client";

import type { RowSelectionState, Table } from "@tanstack/react-table";
import {
	CommandBar,
	CommandBarBar,
	CommandBarCommand,
	CommandBarSeperator,
	CommandBarValue,
} from "@/components/CommandBar";

type DataTableBulkEditorProps<TData> = {
	table: Table<TData>;
	rowSelection: RowSelectionState;
};

function DataTableBulkEditor<TData>({
	table,
	rowSelection,
}: Readonly<DataTableBulkEditorProps<TData>>) {
	const hasSelectedRows = Object.keys(rowSelection).length > 0;
	return (
		<CommandBar open={hasSelectedRows}>
			<CommandBarBar>
				<CommandBarValue>
					{Object.keys(rowSelection).length} seçili
				</CommandBarValue>
				<CommandBarSeperator />
				<CommandBarCommand
					label="Düzenle"
					action={() => {
						console.log("Edit");
					}}
					shortcut={{ shortcut: "d" }}
				/>
				<CommandBarSeperator />
				<CommandBarCommand
					label="Sil"
					action={() => {
						console.log("Delete");
					}}
					shortcut={{ shortcut: "s" }}
				/>
				<CommandBarSeperator />
				<CommandBarCommand
					label="Sıfırla"
					action={() => {
						table.resetRowSelection();
					}}
					shortcut={{ shortcut: "Escape", label: "esc" }}
					// don't disable this command
				/>
			</CommandBarBar>
		</CommandBar>
	);
}

export { DataTableBulkEditor };
