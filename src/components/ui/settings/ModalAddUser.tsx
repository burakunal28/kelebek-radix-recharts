import { Button } from "@/components/Button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/Select";
import { roles } from "@/data/data";

export type ModalAddUserProps = {
	children: React.ReactNode;
};

export function ModalAddUser({ children }: ModalAddUserProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-lg">
				<form>
					<DialogHeader>
						<DialogTitle>İşletmeye kullanıcı davet et</DialogTitle>
						<DialogDescription className="mt-1 text-sm leading-6">
							İşletmeye kullanıcı davet etmek için e-posta adresi ve rol girin
						</DialogDescription>
						<div className="mt-4">
							<Label htmlFor="email-new-user" className="font-medium">
								E-posta
							</Label>
							<Input
								id="email-new-user"
								name="email-new-user"
								placeholder="ayse@cicek.com"
								className="mt-2"
							/>
						</div>
						<div className="mt-4">
							<Label htmlFor="role-new-user" className="font-medium">
								Rol seçin
							</Label>
							<Select>
								<SelectTrigger
									id="role-new-user"
									name="role-new-user"
									className="mt-2"
								>
									<SelectValue placeholder="Destekçi" />
								</SelectTrigger>
								<SelectContent align="end">
									{roles.map((role) => (
										<SelectItem
											key={role.value}
											value={role.value}
											disabled={role.value === "admin"}
										>
											{role.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</DialogHeader>
					<DialogFooter className="mt-6">
						<DialogClose asChild>
							<Button
								className="mt-2 w-full sm:mt-0 sm:w-fit"
								variant="secondary"
							>
								Geri dön
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button type="submit" className="w-full sm:w-fit">
								Davet et
							</Button>
						</DialogClose>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
