import { useMutation, useQueryClient } from 'react-query';
import { COVID19Service } from 'services';

export const useReportCases = () => {
	const queryClient = useQueryClient();

	const { mutate: reportCases } = useMutation(COVID19Service.reportCases, {
		onSuccess: async () => {
			await queryClient.invalidateQueries('summary');
		},
	});

	const { mutate: resetState } = useMutation(COVID19Service.resetLocalData, {
		onSuccess: async () => {
			await queryClient.invalidateQueries('summary');
		},
	});

	return { reportCases, resetState };
};
