import { useQuery } from 'react-query';
import { COVID19Service } from 'services';
import { useMemo } from 'react';

interface useCountriesQueryProps {
	searchQuery?: string;
}

export const useCountriesQuery = ({ searchQuery }: useCountriesQueryProps) => {
	const query = useQuery('countries', COVID19Service.getCountriesList);
	const data = useMemo(() => {
		let newData = query.data;
		if (newData && searchQuery) {
			const lowerSearchQuery = searchQuery.toLowerCase();
			newData = newData.filter(
				country =>
					country.name.toLowerCase().includes(lowerSearchQuery) ||
					country.iso2.toLowerCase().includes(lowerSearchQuery) ||
					country.slug.toLowerCase().includes(lowerSearchQuery),
			);
		}
		return newData;
	}, [query.data, searchQuery]);

	return { ...query, data };
};
