"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import * as React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/Dropdown";

export type DropdownUserProfileProps = {
	children: React.ReactNode;
	align?: "center" | "start" | "end";
};

export function DropdownUserProfile({
	children,
	align = "start",
}: Readonly<DropdownUserProfileProps>) {
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent align={align}>
				<DropdownMenuLabel>monica@bing.com</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Yenilikler
						<RiArrowRightUpLine
							className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
							aria-hidden="true"
						/>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Dokümantasyon
						<RiArrowRightUpLine
							className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
							aria-hidden="true"
						/>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Destek talebi
						<RiArrowRightUpLine
							className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
							aria-hidden="true"
						/>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Oturumu kapat</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
