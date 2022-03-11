import React, { FC } from 'react';
import { useMainNavigator, useSummaryQuery } from 'hooks';
import { CaseTypeEnum } from 'types';
import { ScreenWrapper } from '../../components';
import { FlatList, Text } from 'react-native';

export const CountriesListScreen: FC = () => {
	const { navigation, route } = useMainNavigator<'CountriesList'>();
	const { data } = useSummaryQuery(CaseTypeEnum.confirmed, 'DESC');
	return (
		<ScreenWrapper>
			<FlatList
				data={data?.countries}
				renderItem={({ item }) => <Text>{item.name}</Text>}
			/>
		</ScreenWrapper>
	);
};
