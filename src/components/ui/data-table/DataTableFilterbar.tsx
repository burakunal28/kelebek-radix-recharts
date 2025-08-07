"use client";

import { RiDownloadLine } from "@remixicon/react";
import type { Table } from "@tanstack/react-table";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/Button";
import { Searchbar } from "@/components/Searchbar";
import { conditions, regions, statuses } from "@/data/data";
import { formatters } from "@/lib/utils";
import { DataTableFilter } from "./DataTableFilter";
import { ViewOptions } from "./DataTableViewOptions";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function Filterbar<TData>({
	table,
}: Readonly<DataTableToolbarProps<TData>>) {
	const isFiltered = table.getState().columnFilters.length > 0;
	const [searchTerm, setSearchTerm] = useState<string>("");

	const debouncedSetFilterValue = useDebouncedCallback((value) => {
		table.getColumn("owner")?.setFilterValue(value);
	}, 300);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
		debouncedSetFilterValue(value);
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2 sm:gap-x-6">
			<div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row sm:items-center">
				{table.getColumn("status")?.getIsVisible() && (
					<DataTableFilter
						column={table.getColumn("status")}
						title="Durum"
						options={statuses}
						type="select"
					/>
				)}
				{table.getColumn("region")?.getIsVisible() && (
					<DataTableFilter
						column={table.getColumn("region")}
						title="Bölge"
						options={regions}
						type="checkbox"
					/>
				)}
				{table.getColumn("costs")?.getIsVisible() && (
					<DataTableFilter
						column={table.getColumn("costs")}
						title="Harcama"
						type="number"
						options={conditions}
						formatter={(value: string | number) =>
							formatters.currency(Number(value))
						}
					/>
				)}
				{table.getColumn("owner")?.getIsVisible() && (
					<Searchbar
						type="search"
						placeholder="Ada göre ara..."
						value={searchTerm}
						onChange={handleSearchChange}
						className="w-full sm:max-w-[250px] sm:[&>input]:h-[30px]"
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="border border-gray-200 px-2 font-semibold text-indigo-600 sm:border-none sm:py-1 dark:border-gray-800 dark:text-indigo-500"
					>
						Filtreleri temizle
					</Button>
				)}
			</div>
			<div className="flex items-center gap-2">
				<Button
					variant="secondary"
					className="hidden gap-x-2 px-2 py-1.5 text-sm sm:text-xs lg:flex"
				>
					<RiDownloadLine className="size-4 shrink-0" aria-hidden="true" />
					Dışa Aktar
				</Button>
				<ViewOptions table={table} />
			</div>
		</div>
	);
}
