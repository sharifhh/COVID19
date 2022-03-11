declare interface Country {
	name: string;
	slug: string;
	iso2: string;
}

declare enum CaseTypeEnum {
	confirmed = 'confirmed',
	recovered = 'recovered',
	deaths = 'deaths',
}

declare interface Data extends Record<CaseTypeEnum, number> {}

declare interface CountryData extends Country, Data {}

declare interface Summary {
	global: Data;
	countries: CountryData[];
}

declare interface CountryState {
	[country: string]: number;
	total: number;
}

declare interface LocalData {
	confirmed: CountryState;
	recovered: CountryState;
	deaths: CountryState;
}
