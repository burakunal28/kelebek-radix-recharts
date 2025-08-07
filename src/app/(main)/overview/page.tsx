"use client";
import { subDays, toDate } from "date-fns";
import React from "react";
import type { DateRange } from "react-day-picker";
import { CategoryBarCard } from "@/components/ui/overview/DashboardCategoryBarCard";
import { ChartCard } from "@/components/ui/overview/DashboardChartCard";
import { Filterbar } from "@/components/ui/overview/DashboardFilterbar";
import { ProgressBarCard } from "@/components/ui/overview/DashboardProgressBarCard";
import { overviews } from "@/data/overview-data";
import type { OverviewData } from "@/data/schema";
import { cx } from "@/lib/utils";

export type PeriodValue = "previous-period" | "last-year" | "no-comparison";

const categories: {
	title: keyof OverviewData;
	type: "currency" | "unit";
}[] = [
	{
		title: "Alınan sipariş",
		type: "unit",
	},
	{
		title: "Hazırlanan sipariş",
		type: "unit",
	},
	{
		title: "Sipariş sorguları",
		type: "unit",
	},
	{
		title: "Tamamlanan ödemeler",
		type: "currency",
	},
	{
		title: "Yeni kayıtlar",
		type: "unit",
	},
	{
		title: "Girişler",
		type: "unit",
	},
	{
		title: "Çıkışlar",
		type: "unit",
	},
	{
		title: "Destek çağrıları",
		type: "unit",
	},
];

export type KpiEntry = {
	title: string;
	percentage: number;
	current: number;
	allowed: number;
	unit?: string;
};

const data: KpiEntry[] = [
	{
		title: "Toplam sipariş",
		percentage: 68,
		current: 3400,
		allowed: 5000,
		unit: "",
	},
	{
		title: "Paket servis siparişi",
		percentage: 60,
		current: 1200,
		allowed: 2000,
		unit: "",
	},
	{
		title: "Restoran içi sipariş",
		percentage: 73.3,
		current: 2200,
		allowed: 3000,
		unit: "",
	},
];

const data2: KpiEntry[] = [
	{
		title: "Aktif restoranlar",
		percentage: 85,
		current: 17,
		allowed: 20,
		unit: "",
	},
	{
		title: "Toplam personel",
		percentage: 90,
		current: 45,
		allowed: 50,
		unit: "",
	},
	{
		title: "Ortalama sipariş süresi",
		percentage: 60,
		current: 18,
		allowed: 30,
		unit: "dk",
	},
];

export type KpiEntryExtended = Omit<
	KpiEntry,
	"current" | "allowed" | "unit"
> & {
	value: string;
	color: string;
};

const data3: KpiEntryExtended[] = [
	{
		title: "POS hizmet bedeli",
		percentage: 39.1,
		value: "₺90",
		color: "bg-indigo-600 dark:bg-indigo-500",
	},
	{
		title: "Paket servis komisyonu",
		percentage: 17.4,
		value: "₺40",
		color: "bg-purple-600 dark:bg-purple-500",
	},
	{
		title: "Menü abonelik",
		percentage: 13.0,
		value: "₺30",
		color: "bg-gray-400 dark:bg-gray-600",
	},
	{
		title: "Ekstra sipariş bildirimi",
		percentage: 8.7,
		value: "₺20",
		color: "bg-green-600 dark:bg-green-500",
	},
	{
		title: "Online rezervasyon hizmeti",
		percentage: 21.7,
		value: "₺50",
		color: "bg-yellow-600 dark:bg-yellow-500",
	},
];

const overviewsDates = overviews.map((item) => toDate(item.date).getTime());
const maxDate = toDate(Math.max(...overviewsDates));

export default function Overview() {
	const [selectedDates, setSelectedDates] = React.useState<
		DateRange | undefined
	>({
		from: subDays(maxDate, 30),
		to: maxDate,
	});
	const [selectedPeriod, setSelectedPeriod] =
		React.useState<PeriodValue>("last-year");

	const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
		categories.map((category) => category.title),
	);

	return (
		<>
			<section aria-labelledby="current-billing-cycle">
				<h1
					id="current-billing-cycle"
					className="scroll-mt-10 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
				>
					Mevcut fatura dönemi
				</h1>
				<div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">
					<ProgressBarCard
						title="Sipariş Kullanımı"
						change="+0.2%"
						value="68.1%"
						valueDescription="aylık sipariş limiti kullanımı"
						ctaDescription="Aylık sipariş hakkınız dolmak üzere"
						ctaText="Planınızı yükseltin"
						ctaLink="#"
						data={data}
					/>
					<ProgressBarCard
						title="Restoran Durumu"
						change="+2.9%"
						value="85%"
						valueDescription="aktif restoran oranı"
						ctaDescription="Daha fazla restoran eklemek için"
						ctaText="Planınızı yükseltin"
						ctaLink="#"
						data={data2}
					/>
					<CategoryBarCard
						title="Fatura"
						change="-1.4%"
						value="₺230"
						valueDescription="mevcut fatura dönemi"
						subtitle="Şu anki fatura"
						ctaDescription="Ekstra kullanımlarınız için"
						ctaText="Ücretlerinizi yönetin"
						ctaLink="#"
						data={data3}
					/>
				</div>
			</section>
			<section aria-labelledby="usage-overview">
				<h1
					id="usage-overview"
					className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
				>
					Genel Bakış
				</h1>
				<div className="sticky top-16 z-20 flex items-center justify-between border-b border-gray-200 bg-white pb-4 pt-4 sm:pt-6 lg:top-0 lg:mx-0 lg:px-0 lg:pt-8 dark:border-gray-800 dark:bg-gray-950">
					<Filterbar
						maxDate={maxDate}
						minDate={new Date(2024, 0, 1)}
						selectedDates={selectedDates}
						onDatesChange={(dates) => setSelectedDates(dates)}
						selectedPeriod={selectedPeriod}
						onPeriodChange={(period) => setSelectedPeriod(period)}
						categories={categories}
						setSelectedCategories={setSelectedCategories}
						selectedCategories={selectedCategories}
					/>
				</div>
				<dl
					className={cx(
						"mt-10 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
					)}
				>
					{categories
						.filter((category) => selectedCategories.includes(category.title))
						.map((category) => {
							return (
								<ChartCard
									key={category.title}
									title={category.title}
									type={category.type}
									selectedDates={selectedDates}
									selectedPeriod={selectedPeriod}
								/>
							);
						})}
				</dl>
			</section>
		</>
	);
}
