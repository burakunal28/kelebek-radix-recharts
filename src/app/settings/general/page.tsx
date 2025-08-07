"use client";
import { RiExternalLinkLine } from "@remixicon/react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/Select";

import { roles, users } from "@/data/data";

export default function General() {
	// Monica Bing örneği için kullanıcıyı bul
	const monica = users.find((u) => u.name === "Monica Bing");
	return (
		<div className="space-y-10">
			<section aria-labelledby="personal-information">
				<form>
					<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
						<div>
							<h2
								id="personal-information"
								className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
							>
								Kişisel Bilgiler
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-500">
								Bilgilerinizi ve rolünüzü yönetin
							</p>
						</div>
						<div className="md:col-span-2">
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
								<div className="col-span-full sm:col-span-3">
									<Label htmlFor="first-name" className="font-medium">
										Ad
									</Label>
									<Input
										type="text"
										id="first-name"
										name="first-name"
										autoComplete="given-name"
										placeholder="Monica"
										className="mt-2"
									/>
								</div>
								<div className="col-span-full sm:col-span-3">
									<Label htmlFor="last-name" className="font-medium">
										Soyad
									</Label>
									<Input
										type="text"
										id="last-name"
										name="last-name"
										autoComplete="family-name"
										placeholder="Bing"
										className="mt-2"
									/>
								</div>
								<div className="col-span-full">
									<Label htmlFor="email" className="font-medium">
										E-posta
									</Label>
									<Input
										type="email"
										id="email"
										name="email"
										autoComplete="email"
										placeholder="monica@bing.com"
										className="mt-2"
									/>
								</div>
								<div className="col-span-full sm:col-span-3">
									<Label htmlFor="year" className="font-medium">
										Doğum Yılı
									</Label>
									<Input
										autoComplete="off"
										id="birthyear"
										name="year"
										type="number"
										placeholder="1969"
										enableStepper={false}
										className="mt-2"
										min="1900"
										max={new Date().getFullYear()}
										step="1"
									/>
								</div>
								<div className="col-span-full sm:col-span-3">
									<Label htmlFor="email" className="font-medium">
										Rol
									</Label>
									{monica ? (
										<Select defaultValue={monica.role}>
											<SelectTrigger
												name="role"
												id="role"
												className="mt-2"
												disabled
											>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												{roles.map((role) => (
													<SelectItem key={role.value} value={role.value}>
														{role.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									) : (
										<Select defaultValue="member">
											<SelectTrigger
												name="role"
												id="role"
												className="mt-2"
												disabled
											>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												{roles.map((role) => (
													<SelectItem key={role.value} value={role.value}>
														{role.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									)}
									<p className="mt-2 text-xs text-gray-500">
										Roller yalnızca sistem yöneticisi tarafından
										değiştirilebilir
									</p>
								</div>
								<div className="col-span-full mt-6 flex justify-end">
									<Button type="submit">Ayarları Kaydet</Button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</section>
			<Divider />
			<section aria-labelledby="notification-settings">
				<form>
					<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
						<div>
							<h2
								id="notification-settings"
								className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
							>
								Bildirim Ayarları
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-500">
								Almak istediğiniz bildirim türlerini yapılandırın
							</p>
						</div>
						<div className="md:col-span-2">
							<fieldset>
								<legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
									İşletme
								</legend>
								<p className="mt-1 text-sm leading-6 text-gray-500">
									Almak istediğiniz işletme bildirim türlerini yapılandırın
								</p>
								<ul className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox
											id="team-requests"
											name="team-requests"
											defaultChecked
										/>
										<Label htmlFor="team-requests">
											İşletmeye katılma istekleri
										</Label>
									</li>
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox id="team-activity-digest" />
										<Label htmlFor="team-activity-digest">
											Haftalık işletme etkinlik özeti
										</Label>
									</li>
								</ul>
							</fieldset>
							<fieldset className="mt-6">
								<legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
									Kullanım
								</legend>
								<p className="mt-1 text-sm leading-6 text-gray-500">
									Almak istediğiniz kullanım bildirim türlerini yapılandırın
								</p>
								<ul className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox id="api-requests" name="api-requests" />
										<Label htmlFor="api-requests">API olayları</Label>
									</li>
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox
											id="workspace-execution"
											name="workspace-execution"
										/>
										<Label htmlFor="workspace-execution">
											Platform olayları
										</Label>
									</li>
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox
											id="query-caching"
											name="query-caching"
											defaultChecked
										/>
										<Label htmlFor="query-caching">Ödeme işlemleri</Label>
									</li>
									<li className="flex items-center gap-x-3 py-3">
										<Checkbox id="storage" name="storage" defaultChecked />
										<Label htmlFor="storage">Kullanıcı davranışları</Label>
									</li>
								</ul>
							</fieldset>
							<div className="col-span-full mt-6 flex justify-end">
								<Button type="submit">Ayarları Kaydet</Button>
							</div>
						</div>
					</div>
				</form>
			</section>
			<Divider />
			<section aria-labelledby="danger-zone">
				<form>
					<div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
						<div>
							<h2
								id="danger-zone"
								className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
							>
								Tehlike Bölge
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-500">
								Genel işletmeyi yönetin. Daha fazla bilgi için sistem
								yöneticinize başvurun. information.{" "}
								<a
									href="/settings/billing"
									className="inline-flex items-center gap-1 text-indigo-600 hover:underline hover:underline-offset-4 dark:text-indigo-400"
								>
									Daha fazlası
									<RiExternalLinkLine
										className="size-4 shrink-0"
										aria-hidden="true"
									/>
								</a>
							</p>
						</div>
						<div className="space-y-6 md:col-span-2">
							<Card className="p-4">
								<div className="flex items-start justify-between gap-10">
									<div>
										<h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
											İşletmeden ayrıl
										</h4>
										<p className="mt-2 text-sm leading-6 text-gray-500">
											Erişimlerinizi kaldırın. İşletmeye eklediğiniz diğer
											kişiler kalacaktır.
										</p>
									</div>
									<Button
										variant="secondary"
										className="text-red-600 dark:text-red-500"
									>
										Ayrıl
									</Button>
								</div>
							</Card>
							<Card className="overflow-hidden p-0">
								<div className="flex items-start justify-between gap-10 p-4">
									<div>
										<h4 className="text-sm font-medium text-gray-400 dark:text-gray-600">
											İşletmeyi sil
										</h4>
										<p className="mt-2 text-sm leading-6 text-gray-400 dark:text-gray-600">
											Erişimlerinizi kaldırın. İşletmeye eklediğiniz diğer
											kişiler kalacaktır.
										</p>
									</div>
									<Button
										variant="secondary"
										disabled
										className="whitespace-nowrap text-red-600 disabled:text-red-300 disabled:opacity-50 dark:text-red-500 disabled:dark:text-red-700"
									>
										İşletmeyi sil
									</Button>
								</div>
								<div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
									<p className="text-sm text-gray-500">
										İşletmeyi silemezsiniz çünkü sistem yöneticisi değilsiniz.
									</p>
								</div>
							</Card>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
}
