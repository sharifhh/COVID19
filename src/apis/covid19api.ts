import { create } from 'apisauce';

interface CountryResponse {
	Country: string;
	ISO2: string;
	Slug: string;
}

interface DataResponse {
	TotalConfirmed: number;
	TotalRecovered: number;
	TotalDeaths: number;
}

interface CountryDataResponse extends DataResponse {
	Country: string;
	CountryCode: string;
	Slug: string;
}

interface SummaryResponse {
	Global: DataResponse;
	Countries: CountryDataResponse[];
}

const api = create({
	baseURL: 'https://api.covid19api.com',
});

const getSummary: () => Promise<Summary> = () => {
	return api.get<SummaryResponse>('/summary').then(({ data }) => {
		if (!data) {
			throw new Error();
		}
		const mappedResponse: Summary = {
			global: { confirmed: 0, recovered: 0, deaths: 0 },
			countries: [],
		};
		const { Global, Countries } = data;
		mappedResponse.global = {
			confirmed: Global.TotalConfirmed,
			recovered: Global.TotalRecovered,
			deaths: Global.TotalDeaths,
		};
		mappedResponse.countries = Countries.map(countryResponse => ({
			name: countryResponse.Country,
			slug: countryResponse.Slug,
			iso2: countryResponse.CountryCode,
			confirmed: countryResponse.TotalConfirmed,
			recovered: countryResponse.TotalRecovered,
			deaths: countryResponse.TotalDeaths,
		}));
		return mappedResponse;
	});
};

const getCountriesList: () => Promise<Country[]> = () => {
	return api.get<CountryResponse[]>('/countries').then(({ data }) => {
		if (!data) {
			throw new Error();
		}
		return data.map(countryResponse => ({
			name: countryResponse.Country,
			slug: countryResponse.Slug,
			iso2: countryResponse.ISO2,
		}));
	});
};

export const COVID19Api = { getSummary, getCountriesList };
