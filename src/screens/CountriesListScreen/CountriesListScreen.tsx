import React, { FC, useState } from 'react';
import { useMainNavigator, useSummaryQuery } from 'hooks';
import { CaseTypeEnum } from 'types';
import {
	CountryCard,
	ReportCasesFAB,
	ScreenWrapper,
	SearchInput,
	CaseTypeSelector,
} from 'components';
import { FlatList, View } from 'react-native';
import { styles } from './styles';

export const CountriesListScreen: FC = () => {
	const { navigation, route } = useMainNavigator<'CountriesList'>();
	const [sortCase, setSortCase] = useState(CaseTypeEnum.confirmed);
	const [search, setSearch] = useState('');
	const { data, refetch, isRefetching } = useSummaryQuery({
		sortCase,
		sortBy: 'DESC',
		searchQuery: search || undefined,
	});
	return (
		<ScreenWrapper>
			<View style={styles.headerContainer}>
				<SearchInput setSearch={setSearch} />
				<CaseTypeSelector caseType={sortCase} onChange={setSortCase} />
			</View>
			<FlatList
				onRefresh={refetch}
				refreshing={isRefetching}
				data={data?.countries}
				initialNumToRender={10}
				windowSize={3}
				keyboardDismissMode="on-drag"
				keyExtractor={item => item.iso2}
				renderItem={({ item }) => (
					<CountryCard
						name={item.name}
						iso2={item.iso2}
						recovered={item.recovered}
						confirmed={item.confirmed}
						deaths={item.deaths}
					/>
				)}
			/>
			<ReportCasesFAB />
		</ScreenWrapper>
	);
};
