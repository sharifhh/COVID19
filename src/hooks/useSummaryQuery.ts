import { useQuery } from 'react-query';
import { COVID19Service } from 'services';
import { useMemo } from 'react';

interface useSummaryQueryProps {
	sortCase?: CaseTypeEnum;
	sortBy?: 'ASC' | 'DESC';
	size?: number;
	searchQuery?: string;
}

export const useSummaryQuery = ({
	sortCase,
	sortBy,
	size,
	searchQuery,
}: useSummaryQueryProps) => {
	const query = useQuery(['summary', sortCase, sortBy], () =>
		COVID19Service.getSummary(sortCase, sortBy),
	);

	const data = useMemo(() => {
		const newData = { ...query.data };
		if (newData.countries) {
			if (searchQuery) {
				const lowerSearchQuery = searchQuery.toLowerCase();
				newData.countries = newData.countries.filter(country =>
					country.name.toLowerCase().includes(lowerSearchQuery),
				);
			}
			if (size) {
				newData.countries = newData.countries.slice(0, size);
			}
		}
		return newData;
	}, [query.data, size, searchQuery]);

	return { ...query, data };
};
