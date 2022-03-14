import { useQuery } from 'react-query';
import { COVID19Service } from 'services';

export const useCountriesQuery = () => {
	return useQuery('countries', COVID19Service.getCountriesList);
};
