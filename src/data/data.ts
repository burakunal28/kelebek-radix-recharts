import type { Usage } from "./schema";

export const roles: { value: string; label: string }[] = [
	{
		value: "admin",
		label: "Sahip",
	},
	{
		value: "manager",
		label: "Müdür",
	},
	{
		value: "member",
		label: "Çalışan",
	},
	{
		value: "viewer",
		label: "Analist",
	},
	{
		value: "contributor",
		label: "Destekçi",
	},
];

export const statuses: { value: string; label: string; variant: string }[] = [
	{
		value: "live",
		label: "Aktif",
		variant: "success",
	},
	{
		value: "inactive",
		label: "Çevrimdışı",
		variant: "neutral",
	},
	{
		value: "archived",
		label: "Arşiv",
		variant: "warning",
	},
];

export const regions: { value: string; label: string }[] = [
	{
		value: "Marmara",
		label: "Marmara",
	},
	{
		value: "Ege",
		label: "Ege",
	},
	{
		value: "Akdeniz",
		label: "Akdeniz",
	},
	{
		value: "Anadolu",
		label: "Anadolu",
	},
	{
		value: "Doğu",
		label: "Doğu",
	},
	{
		value: "Güneydoğu",
		label: "Güneydoğu",
	},
	{
		value: "Karadeniz",
		label: "Karadeniz",
	},
];

export const conditions: { value: string; label: string }[] = [
	{
		value: "is-equal-to",
		label: "eşit",
	},
	{
		value: "is-between",
		label: "arasında",
	},
	{
		value: "is-greater-than",
		label: "fazla",
	},
	{
		value: "is-less-than",
		label: "az",
	},
];

export const users: {
	name: string;
	initials: string;
	email: string;
	role: string;
}[] = [
	{
		name: "Monica Bing",
		initials: "MB",
		email: "monica@bing.com",
		role: "manager",
	},
	{
		name: "Chandler Bing",
		initials: "CB",
		email: "chandler@bing.com",
		role: "viewer",
	},
	{
		name: "Phoebe Buffay",
		initials: "PB",
		email: "phoebe@buffay.com",
		role: "member",
	},
	{
		name: "Rachel Green",
		initials: "RG",
		email: "rachel@green.com",
		role: "contributor",
	},
	{
		name: "Ross Geller",
		initials: "RG",
		email: "ross@geller.com",
		role: "viewer",
	},
	{
		name: "Joey Tribbiani",
		initials: "JT",
		email: "joey@tribbiani.com",
		role: "admin",
	},
];

export const invitedUsers: {
	initials: string;
	email: string;
	role: string;
	expires: number;
}[] = [
	{
		initials: "LP",
		email: "lydia@posh.com",
		role: "viewer",
		expires: 12,
	},
	{
		initials: "AW",
		email: "awidburg@widburg.com",
		role: "viewer",
		expires: 8,
	},
];

export const usage: Usage[] = [
	{
		owner: "Cristiano Ronaldo",
		status: "live",
		costs: 5422.35,
		region: "Marmara",
		stability: 99,
		lastEdited: "23/09/2023 13:00",
	},
	{
		owner: "Ricardo Kaká",
		status: "live",
		costs: 6087.11,
		region: "Anadolu",
		stability: 91,
		lastEdited: "22/09/2023 10:45",
	},
	{
		owner: "Toni Kroos",
		status: "live",
		costs: 7234.56,
		region: "Doğu",
		stability: 12,
		lastEdited: "17/05/2021 08:32",
	},
	{
		owner: "Vinicius Junior",
		status: "inactive",
		costs: 0,
		region: "Ege",
		stability: 0,
		lastEdited: "10/11/2022 15:24",
	},
	{
		owner: "Karim Benzema",
		status: "live",
		costs: 8190.77,
		region: "Akdeniz",
		stability: 8,
		lastEdited: "05/06/2023 12:16",
	},
	{
		owner: "Jude Bellingham",
		status: "archived",
		costs: 7609.32,
		region: "Güneydoğu",
		stability: 20,
		lastEdited: "23/01/2022 11:11",
	},
	{
		owner: "Arda Güler",
		status: "live",
		costs: 5204.98,
		region: "Marmara",
		stability: 18,
		lastEdited: "14/03/2023 14:45",
	},
	{
		owner: "Xabi Alonso",
		status: "inactive",
		costs: 0,
		region: "Karadeniz",
		stability: 0,
		lastEdited: "12/02/2023 09:12",
	},
	{
		owner: "Raúl González",
		status: "live",
		costs: 9874.56,
		region: "Akdeniz",
		stability: 6,
		lastEdited: "19/08/2022 16:03",
	},
	{
		owner: "Sergi Ramos",
		status: "live",
		costs: 5486.99,
		region: "Doğu",
		stability: 12,
		lastEdited: "29/11/2021 17:25",
	},
	{
		owner: "Iker Casillas",
		status: "live",
		costs: 6120.45,
		region: "Ege",
		stability: 9,
		lastEdited: "07/12/2023 07:14",
	},
	{
		owner: "Dani Carvajal",
		status: "live",
		costs: 4834.11,
		region: "Karadeniz",
		stability: 15,
		lastEdited: "28/04/2023 10:45",
	},
	{
		owner: "Gonzalo Higuaín",
		status: "live",
		costs: 5302.22,
		region: "Anadolu",
		stability: 97,
		lastEdited: "03/10/2022 08:33",
	},
	{
		owner: "Ruud van Nistelrooy",
		status: "live",
		costs: 6221.54,
		region: "Marmara",
		stability: 11,
		lastEdited: "22/07/2022 14:16",
	},
	{
		owner: "Lassana Diarra",
		status: "archived",
		costs: 6129.99,
		region: "Güneydoğu",
		stability: 22,
		lastEdited: "18/01/2022 12:45",
	},
	{
		owner: "Marcelo Vieira",
		status: "live",
		costs: 4850.33,
		region: "Akdeniz",
		stability: 13,
		lastEdited: "05/06/2021 18:33",
	},
	{
		owner: "Ricardo Carvalho",
		status: "live",
		costs: 7902.11,
		region: "Doğu",
		stability: 91,
		lastEdited: "11/05/2023 11:00",
	},
	{
		owner: "Ángel Di María",
		status: "live",
		costs: 6789.77,
		region: "Ege",
		stability: 10,
		lastEdited: "19/09/2023 17:17",
	},
	{
		owner: "Emmanuel Adebayor",
		status: "live",
		costs: 7434.22,
		region: "Anadolu",
		stability: 9,
		lastEdited: "27/03/2023 14:28",
	},
	{
		owner: "Raphaël Varane",
		status: "archived",
		costs: 7290.01,
		region: "Karadeniz",
		stability: 12,
		lastEdited: "23/11/2022 15:13",
	},
	{
		owner: "Fábio Coentrão",
		status: "live",
		costs: 8921.34,
		region: "Güneydoğu",
		stability: 16,
		lastEdited: "08/05/2023 08:56",
	},
	{
		owner: "Sami Khedira",
		status: "live",
		costs: 6834.23,
		region: "Marmara",
		stability: 8,
		lastEdited: "29/04/2022 19:27",
	},
	{
		owner: "Carlos Henrique Casemiro",
		status: "inactive",
		costs: 0,
		region: "Ege",
		stability: 14,
		lastEdited: "30/12/2023 13:01",
	},
	{
		owner: "Gareth Bale",
		status: "live",
		costs: 4321.56,
		region: "Doğu",
		stability: 5,
		lastEdited: "18/06/2021 10:49",
	},
	{
		owner: "James Rodríguez",
		status: "archived",
		costs: 5120.33,
		region: "Akdeniz",
		stability: 19,
		lastEdited: "24/02/2022 14:02",
	},
	{
		owner: "Kylian Mbappé",
		status: "live",
		costs: 9211.42,
		region: "Güneydoğu",
		stability: 11,
		lastEdited: "22/07/2021 12:33",
	},
	{
		owner: "Federico Valverde",
		status: "inactive",
		costs: 0,
		region: "Anadolu",
		stability: 6,
		lastEdited: "13/09/2022 16:22",
	},
	{
		owner: "Éder Militão",
		status: "live",
		costs: 4534.88,
		region: "Marmara",
		stability: 17,
		lastEdited: "09/10/2023 17:44",
	},
	{
		owner: "Rodrygo Silva",
		status: "live",
		costs: 8245.99,
		region: "Karadeniz",
		stability: 9,
		lastEdited: "29/07/2022 11:56",
	},
	{
		owner: "Képler Pepe",
		status: "archived",
		costs: 7890.77,
		region: "Doğu",
		stability: 14,
		lastEdited: "10/11/2021 15:08",
	},
	{
		owner: "Antonio Rüdiger",
		status: "live",
		costs: 8911.44,
		region: "Akdeniz",
		stability: 10,
		lastEdited: "06/08/2021 09:17",
	},
	{
		owner: "Eduardo Camavinga",
		status: "inactive",
		costs: 0,
		region: "Doğu",
		stability: 12,
		lastEdited: "25/05/2022 10:05",
	},
	{
		owner: "Dean Huijsen",
		status: "live",
		costs: 5500.12,
		region: "Ege",
		stability: 15,
		lastEdited: "07/01/2023 08:33",
	},
	{
		owner: "Raúl Asencio",
		status: "live",
		costs: 7200.98,
		region: "Karadeniz",
		stability: 8,
		lastEdited: "21/09/2023 13:00",
	},
	{
		owner: "Gonzalo García",
		status: "live",
		costs: 8321.56,
		region: "Anadolu",
		stability: 18,
		lastEdited: "12/06/2021 11:45",
	},
	{
		owner: "Aurélien Tchouaméni",
		status: "live",
		costs: 4534.99,
		region: "Marmara",
		stability: 11,
		lastEdited: "30/03/2022 14:14",
	},
	{
		owner: "Trent Alexander-Arnold",
		status: "live",
		costs: 6890.11,
		region: "Güneydoğu",
		stability: 7,
		lastEdited: "14/05/2023 12:36",
	},
	{
		owner: "Endrick Felipe",
		status: "live",
		costs: 7990.01,
		region: "Akdeniz",
		stability: 13,
		lastEdited: "18/10/2022 09:25",
	},
];
