import { useQuery } from 'react-query';
import { COVID19Service } from '../services';

export const useSummaryQuery = (
	sortCase?: CaseTypeEnum,
	sortBy?: 'ASC' | 'DESC',
	size?: number,
) => {
	return useQuery(['summary', sortCase, sortBy, size], () =>
		COVID19Service.getSummary(sortCase, sortBy, size),
	);
};
