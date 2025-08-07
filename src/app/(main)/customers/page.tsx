import { columns } from "@/components/ui/data-table/columns";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { usage } from "@/data/data";

export default function Customers() {
	return (
		<>
			<h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
				Müşteriler
			</h1>
			<div className="mt-4 sm:mt-6 lg:mt-10">
				<DataTable data={usage} columns={columns} />
			</div>
		</>
	);
}
