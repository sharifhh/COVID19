import React, { FC, useState } from 'react';
import { useMainNavigator, useSummaryQuery } from 'hooks';
import { CaseTypeEnum } from 'types';
import { CountryCard, FAB, ScreenWrapper, Sorter } from 'components';
import { FlatList, TextInput, View } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
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
				<View style={styles.row}>
					<TextInput
						style={styles.searchInput}
						onChangeText={text => setSearch(text)}
						returnKeyType="search"
						autoFocus={false}
					/>
					<View style={styles.searchIconWrapper}>
						<IoniconsIcon name="search" size={20} color="grey" />
					</View>
				</View>
				<Sorter sortCase={sortCase} setSortCase={setSortCase} />
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
			<FAB />
		</ScreenWrapper>
	);
};
