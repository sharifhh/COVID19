import { useMutation, useQueryClient } from 'react-query';
import { COVID19Service } from 'services';

export const useReportCases = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation(COVID19Service.reportCases, {
		onSuccess: async () => {
			await queryClient.invalidateQueries('summary');
		},
	});

	return { reportCases: mutate };
};
