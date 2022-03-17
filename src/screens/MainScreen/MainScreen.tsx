import React, { FC } from 'react';
import { useMainNavigator, useSummaryQuery } from 'hooks';
import { CaseTypeEnum } from 'types';
import { CountryCard, ReportCasesFAB, ScreenWrapper } from 'components';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useReportCases } from 'hooks';
import { styles } from './styles';

export const MainScreen: FC = () => {
	const { navigation, route } = useMainNavigator<'MainScreen'>();
	const { data, refetch, isRefetching } = useSummaryQuery({
		sortCase: CaseTypeEnum.confirmed,
		sortBy: 'DESC',
		size: 5,
	});
	const { resetState } = useReportCases();
	return (
		<ScreenWrapper>
			<FlatList
				onRefresh={refetch}
				refreshing={isRefetching}
				data={data?.countries}
				keyExtractor={item => item.iso2}
				ListHeaderComponent={() => (
					<TouchableOpacity onLongPress={() => resetState()}>
						<LineChart
							data={{
								labels: ['Confirmed', 'Recovered', 'Deaths'],
								datasets: [
									{
										data: [
											(data?.global?.confirmed ?? 0) / Math.pow(10, 6),
											(data?.global?.recovered ?? 0) / Math.pow(10, 6),
											(data?.global?.deaths ?? 0) / Math.pow(10, 6),
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
							style={styles.headerChart}
						/>
					</TouchableOpacity>
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
			<ReportCasesFAB />
		</ScreenWrapper>
	);
};
