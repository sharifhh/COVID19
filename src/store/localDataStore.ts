import create from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';
import { zustandPersistStorage } from 'utils';

interface LocalDataStoreState extends LocalData {
	reportCases: (
		caseType: CaseTypeEnum,
		country: string,
		reportedCases: number,
	) => void;
	resetState: () => void;
}

const initialState: Record<CaseTypeEnum, CountryState> = {
	confirmed: { total: 0 },
	recovered: { total: 0 },
	deaths: { total: 0 },
};

export const useLocalDataStore = create<LocalDataStoreState>(
	persist(
		set => ({
			...initialState,
			reportCases: (caseType, country, reportedCases) =>
				set(
					produce(state => {
						state[caseType][country] += reportedCases;
						state[caseType].total += reportedCases;
					}),
				),
			resetState: () => set(initialState),
		}),
		{
			name: 'localDataStore',
			getStorage: () => zustandPersistStorage,
		},
	),
);
