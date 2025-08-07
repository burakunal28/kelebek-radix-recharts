"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import React from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { ProgressBar } from "@/components/ProgressBar";
import { ProgressCircle } from "@/components/ProgressCircle";
import { Switch } from "@/components/Switch";
import { cx } from "@/lib/utils";

const data: {
	name: string;
	description: string;
	value: string;
	capacity?: string;
	percentageValue?: number;
}[] = [
	{
		name: "POS hizmet bedeli",
		description: "Yazarkasa ve ödeme altyapısı hizmeti",
		value: "€90",
	},
	{
		name: "Paket servis komisyonu",
		description: "Yemeksepeti, Getir gibi platform komisyonları",
		value: "€40",
	},
	{
		name: "Menü abonelik",
		description: "Dijital menü ve içerik güncelleme hizmeti",
		value: "€30",
	},
	{
		name: "Ekstra sipariş bildirimi",
		description: "SMS, WhatsApp, push bildirim ücretleri",
		value: "€20",
	},
	{
		name: "Online rezervasyon hizmeti",
		description: "Rezervasyon yönetimi ve entegrasyon",
		value: "€50",
	},
];

export default function Billing() {
	const [isSpendMgmtEnabled, setIsSpendMgmtEnabled] = React.useState(true);
	return (
		<>
			<div className="rounded-lg bg-gray-50 p-6 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:ring-gray-800">
				<h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
					Bu işletme şu an başlangıç planını kullanıyor
				</h4>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
					Geliştirmek analizler ve özellikler için planınızı yükseltin{" "}
					<a
						href="/pricing"
						className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-500"
					>
						Planları karşılaştır
						<RiArrowRightUpLine
							className="size-4 shrink-0"
							aria-hidden="true"
						/>
					</a>
				</p>
			</div>
			<div className="mt-6 space-y-10">
				<section aria-labelledby="billing-overview">
					<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
						<div>
							<h2
								id="billing-overview"
								className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
							>
								Fatura
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-500">
								Şu anki fatura dönemi için sabit ve ekstra kullanım ücretlerine
								genel bakış
							</p>
						</div>
						<div className="md:col-span-2">
							<ul className="w-full divide-y divide-gray-200 border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
								{data.map((item) => (
									<li key={item.name} className="px-2 py-4 text-sm md:p-4">
										<div className="w-full">
											<div className="flex items-center justify-between">
												<p className="font-medium text-gray-900 dark:text-gray-50">
													{item.name}
												</p>
												<p className="font-medium text-gray-700 dark:text-gray-300">
													{item.value}
												</p>
											</div>
											<div className="w-full md:w-2/3">
												{item.percentageValue && (
													<ProgressBar
														value={item.percentageValue}
														className="mt-2 [&>*]:h-1.5"
													/>
												)}
												<p className="mt-1 flex items-center justify-between text-xs text-gray-500">
													<span>{item.description}</span>
													<span>{item.capacity}</span>
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
							<div className="px-2 py-4 md:p-4">
								<p className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-50">
									<span>
										{new Date().toLocaleDateString("tr-TR", {
											day: "numeric",
											month: "long",
										})}{" "}
										Toplamı
									</span>
									<span className="font-semibold">€230</span>
								</p>
							</div>
						</div>
					</div>
				</section>
				<Divider />
				<section aria-labelledby="cost-spend-control">
					<form>
						<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
							<div>
								<h2
									id="cost-spend-control"
									className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
								>
									Fatura limiti
								</h2>
								<p className="mt-1 text-sm leading-6 text-gray-500">
									Ekstra kullanım ücretlerine karşı koymak için kesin sınır
									belirleyin
								</p>
							</div>
							<div className="md:col-span-2">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<ProgressCircle
											value={isSpendMgmtEnabled ? 62.2 : 0}
											radius={20}
											strokeWidth={4.5}
										/>
										<div>
											{isSpendMgmtEnabled ? (
												<>
													<p className="text-sm font-medium text-gray-900 dark:text-gray-50">
														€280 / 350 (62.2&#37;)
													</p>
													<Label
														htmlFor="spend-mgmt"
														className="text-gray-500 dark:text-gray-500"
													>
														Fatura limiti etkin
													</Label>
												</>
											) : (
												<>
													<p className="text-sm font-medium text-gray-900 dark:text-gray-50">
														&#36;0 / 0 (0&#37;)
													</p>
													<Label
														htmlFor="spend-mgmt"
														className="text-gray-500 dark:text-gray-500"
													>
														Harcama limiti devre dışı
													</Label>
												</>
											)}
										</div>
									</div>
									<Switch
										id="spend-mgmt"
										name="spend-mgmt"
										checked={isSpendMgmtEnabled}
										onCheckedChange={() => {
											setIsSpendMgmtEnabled(!isSpendMgmtEnabled);
										}}
									/>
								</div>
								<div
									className={cx(
										"transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
										isSpendMgmtEnabled ? "h-52 md:h-32" : "h-0",
									)}
									style={{
										transitionDuration: "300ms",
										animationFillMode: "backwards",
									}}
								>
									<div
										className={cx(
											"animate-slideDownAndFade transition",
											isSpendMgmtEnabled ? "" : "hidden",
										)}
										style={{
											animationDelay: "100ms",
											animationDuration: "300ms",
											transitionDuration: "300ms",
											animationFillMode: "backwards",
										}}
									>
										<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
											<div className="md:col-span-1">
												<Label className="font-medium">Limit (€)</Label>
												<Input
													id="hard-cap"
													name="hard-cap"
													defaultValue={350}
													min={100}
													max={1000000}
													type="number"
													className="mt-2"
												/>
											</div>
											<div className="md:col-span-2">
												<Label className="font-medium">
													Fatura limit bildirimleri için e-posta adresi
												</Label>
												<Input
													id="email"
													name="email"
													placeholder="admin@company.com"
													type="email"
													className="mt-2"
												/>
											</div>
										</div>
										<div className="mt-6 flex justify-end">
											<Button type="submit">Güncelle</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</section>
				<Divider />
				<section aria-labelledby="add-ons">
					<form>
						<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
							<div>
								<h2
									id="add-ons"
									className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
								>
									Ekstra hizmetler
								</h2>
								<p className="mt-1 text-sm leading-6 text-gray-500">
									İşletmenizin ihtiyaçlarına göre ekstra hizmetler
								</p>
							</div>
							<div className="space-y-6 md:col-span-2">
								<Card className="overflow-hidden p-0">
									<div className="px-4 pb-6 pt-4">
										<span className="text-sm text-gray-500">€25/ay</span>
										<h4 className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-50">
											Otomatik iade süreçleri
										</h4>
										<p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
											Siparişlerin aniden iptal edilmesini halinde para iadesi
											işlemlerini otomatikleştirin
										</p>
									</div>
									<div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
										<div className="flex items-center gap-3">
											<Switch id="bot-protection" name="bot-protection" />
											<Label htmlFor="bot-protection">Etkinleştir</Label>
										</div>
										<button
											type="button"
											className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-500 underline hover:text-indigo-700 focus:outline-none"
										>
											Daha fazlası
											<RiArrowRightUpLine
												className="size-4 shrink-0"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Card>
								<Card className="overflow-hidden p-0">
									<div className="px-4 pb-6 pt-4">
										<span className="text-sm text-gray-500">€50/ay</span>
										<h4 className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-50">
											Gelişmiş Analizler
										</h4>
										<p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
											İşletmenizin siparişlerini gerçek zamanlı olarak analiz
											edin ve işletmenizin en verimli şekilde çalışması için
											bilinçli kararlar alın
										</p>
									</div>
									<div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
										<div className="flex items-center gap-3">
											<Switch id="insights" name="insights" />
											<Label htmlFor="insights">Etkinleştir</Label>
										</div>
										<button
											type="button"
											className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-500 underline hover:text-indigo-700 focus:outline-none"
										>
											Daha fazlası
											<RiArrowRightUpLine
												className="size-4 shrink-0"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Card>
							</div>
						</div>
					</form>
				</section>
			</div>
		</>
	);
}
