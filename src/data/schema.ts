export type Usage = {
	owner: string;
	status: string;
	costs: number;
	region: string;
	stability: number;
	lastEdited: string;
};

export type OverviewData = {
	date: string;
	"Hazırlanan sipariş": number;
	"Alınan sipariş": number;
	"Sipariş sorguları": number;
	"Tamamlanan ödemeler": number;
	"Yeni kayıtlar": number;
	Girişler: number;
	Çıkışlar: number;
	"Destek çağrıları": number;
};
