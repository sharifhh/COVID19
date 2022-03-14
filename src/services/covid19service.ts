import { COVID19Api } from 'apis';
import { useLocalDataStore } from 'store';

const mergeDataWithLocalData = (
	data?: Summary,
	localDataParam?: Partial<LocalData>,
) => {
	const oldData = data ?? {
		global: { confirmed: 0, recovered: 0, deaths: 0 },
		countries: [],
	};
	const localData = localDataParam ?? useLocalDataStore.getState();
	const localDataGlobal: Data = {
		confirmed: localData.confirmed?.total ?? 0,
		recovered: localData.recovered?.total ?? 0,
		deaths: localData.deaths?.total ?? 0,
	};

	const summary: Summary = {
		global: {
			confirmed: oldData.global.confirmed + localDataGlobal.confirmed,
			recovered: oldData.global.recovered + localDataGlobal.recovered,
			deaths: oldData.global.deaths + localDataGlobal.deaths,
		},
		countries: oldData.countries.map(apiCountry => ({
			...apiCountry,
			confirmed:
				apiCountry.confirmed + (localData.confirmed?.[apiCountry.iso2] ?? 0),
			recovered:
				apiCountry.recovered + (localData.recovered?.[apiCountry.iso2] ?? 0),
			deaths: apiCountry.deaths + (localData.deaths?.[apiCountry.iso2] ?? 0),
		})),
	};

	return summary;
};

const getSummary: (
	caseSort?: CaseTypeEnum,
	sortBy?: 'ASC' | 'DESC',
) => Promise<Summary> = async (caseSort, sortBy) => {
	const apiSummary = await COVID19Api.getSummary();
	const summary = mergeDataWithLocalData(apiSummary);
	if (caseSort) {
		summary.countries = summary.countries.sort((a, b) =>
			sortBy === 'DESC' ? b[caseSort] - a[caseSort] : a[caseSort] - b[caseSort],
		);
	}
	return summary;
};

const getCountriesList: () => Promise<Country[]> = async () => {
	return COVID19Api.getCountriesList();
};

const reportCases: (params: {
	caseType: CaseTypeEnum;
	country: string;
	reportedCases: number;
}) => Promise<void> = async ({ caseType, country, reportedCases }) => {
	useLocalDataStore.getState().reportCases(caseType, country, reportedCases);
	return Promise.resolve();
};

export const COVID19Service = {
	mergeDataWithLocalData,
	getSummary,
	getCountriesList,
	reportCases,
};
