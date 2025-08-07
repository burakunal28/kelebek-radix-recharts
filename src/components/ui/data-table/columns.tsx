"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Badge, type BadgeProps } from "@/components/Badge";
import { Checkbox } from "@/components/Checkbox";
import { statuses } from "@/data/data";
import type { Usage } from "@/data/schema";
import { formatters } from "@/lib/utils";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import type { ConditionFilter } from "./DataTableFilter";
import { DataTableRowActions } from "./DataTableRowActions";

export const columns: ColumnDef<Usage>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() ? "indeterminate" : false)
				}
				onCheckedChange={() => table.toggleAllPageRowsSelected()}
				className="translate-y-0.5"
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={() => row.toggleSelected()}
				className="translate-y-0.5"
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
		meta: {
			displayName: "Select",
		},
	},
	{
		accessorKey: "owner",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Kullanıcı" />
		),
		enableSorting: true,
		enableHiding: false,
		meta: {
			className: "text-left",
			displayName: "Kullanıcı",
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Durum" />
		),
		enableSorting: true,
		meta: {
			className: "text-left",
			displayName: "Durum",
		},
		cell: ({ row }) => {
			const status = statuses.find(
				(item) => item.value === row.getValue("status"),
			);

			if (!status) {
				return null;
			}

			return (
				<Badge variant={status.variant as BadgeProps["variant"]}>
					{status.label}
				</Badge>
			);
		},
	},
	{
		accessorKey: "region",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Bölge" />
		),
		enableSorting: false,
		meta: {
			className: "text-left",
			displayName: "Bölge",
		},
		filterFn: "arrIncludesSome",
	},
	{
		accessorKey: "stability",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Aktiflik" />
		),
		enableSorting: false,
		meta: {
			className: "text-left",
			displayName: "Aktiflik",
		},
		cell: ({ getValue }) => {
			const value = getValue() as number;

			function Indicator({ number }: Readonly<{ number: number }>) {
				let category: string;
				if (number === 0) {
					category = "zero";
				} else if (number < 9) {
					category = "bad";
				} else if (number >= 9 && number <= 15) {
					category = "ok";
				} else {
					category = "good";
				}

				const getBarClass = (index: number) => {
					if (category === "zero") {
						return "bg-gray-300 dark:bg-gray-800";
					} else if (category === "good") {
						return "bg-indigo-600 dark:bg-indigo-500";
					} else if (category === "ok" && index < 2) {
						return "bg-indigo-600 dark:bg-indigo-500";
					} else if (category === "bad" && index < 1) {
						return "bg-indigo-600 dark:bg-indigo-500";
					}
					return "bg-gray-300 dark:bg-gray-800";
				};

				return (
					<div className="flex gap-0.5">
						<div className={`h-3.5 w-1 rounded-sm ${getBarClass(0)}`} />
						<div className={`h-3.5 w-1 rounded-sm ${getBarClass(1)}`} />
						<div className={`h-3.5 w-1 rounded-sm ${getBarClass(2)}`} />
					</div>
				);
			}

			return (
				<div className="flex items-center gap-0.5">
					<span className="w-6">{value}</span>
					<Indicator number={value} />
				</div>
			);
		},
	},
	{
		accessorKey: "costs",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Harcama" />
		),
		enableSorting: true,
		meta: {
			className: "text-right",
			displayName: "Harcama",
		},
		cell: ({ getValue }) => {
			return (
				<span className="font-medium">{formatters.currency(getValue() as number)}</span>
			);
		},
		filterFn: (row, columnId, filterValue: ConditionFilter) => {
			const value = row.getValue(columnId) as number;
			const [min, max] = filterValue.value as [number, number];

			switch (filterValue.condition) {
				case "is-equal-to":
					return value === min;
				case "is-between":
					return value >= min && value <= max;
				case "is-greater-than":
					return value > min;
				case "is-less-than":
					return value < min;
				default:
					return true;
			}
		},
	},
	{
		accessorKey: "lastEdited",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Son Sipariş" />
		),
		enableSorting: false,
		meta: {
			className: "tabular-nums",
			displayName: "Son Sipariş",
		},
	},
	{
		id: "edit",
		header: "Düzenle",
		enableSorting: false,
		enableHiding: false,
		meta: {
			className: "text-right",
			displayName: "Düzenle",
		},
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
