import React, { FC } from 'react';
import { useMainNavigator, useSummaryQuery } from 'hooks';
import { CaseTypeEnum } from 'types';
import { CountryCard, FAB, ScreenWrapper } from 'components';
import { Dimensions, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const MainScreen: FC = () => {
	const { navigation, route } = useMainNavigator<'MainScreen'>();
	const { data, refetch, isRefetching } = useSummaryQuery({
		sortCase: CaseTypeEnum.confirmed,
		sortBy: 'DESC',
		size: 5,
	});
	console.log(data);
	return (
		<ScreenWrapper>
			<FlatList
				onRefresh={refetch}
				refreshing={isRefetching}
				data={data?.countries}
				keyExtractor={item => item.iso2}
				ListHeaderComponent={() => (
					<LineChart
						data={{
							labels: ['Confirmed', 'Recovered', 'Deaths'],
							datasets: [
								{
									data: [
										(data?.global?.confirmed ?? 0) / 1000000,
										(data?.global?.recovered ?? 0) / 1000000,
										(data?.global?.deaths ?? 0) / 1000000,
									],
								},
							],
						}}
						width={Dimensions.get('window').width * 0.9} // from react-native
						height={200}
						segments={3}
						yAxisSuffix="M"
						bezier
						chartConfig={{
							backgroundColor: '#e26a00',
							backgroundGradientFrom: '#fb8c00',
							backgroundGradientTo: '#ffa726',
							color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
							labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						}}
						style={{
							alignSelf: 'center',
							marginVertical: 15,
							shadowColor: 'black',
							shadowOpacity: 0.3,
							shadowRadius: 10,
							shadowOffset: { height: 0, width: 0 },
							elevation: 3,
							borderRadius: 10,
						}}
					/>
				)}
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
