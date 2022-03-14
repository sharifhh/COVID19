import React, { FC } from 'react';
import CountryFlag from 'react-native-country-flag';
import { Text, View } from 'react-native';

export const CountryCard: FC<Omit<CountryData, 'slug'>> = ({
	iso2,
	name,
	confirmed,
	deaths,
	recovered,
}) => {
	return (
		<View
			style={{
				alignSelf: 'center',
				marginVertical: 15,
				padding: 15,
				backgroundColor: 'white',
				width: '90%',
				height: 120,
				shadowColor: 'black',
				shadowOpacity: 0.3,
				shadowRadius: 10,
				shadowOffset: { height: 0, width: 0 },
				elevation: 3,
				borderRadius: 10,
				alignItems: 'center',
				flexDirection: 'row',
			}}>
			<CountryFlag isoCode={iso2} size={45} />
			<View style={{ marginStart: 10 }}>
				<Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
				<Text>Confirmed: {confirmed}</Text>
				<Text>Recovered: {recovered}</Text>
				<Text>Deaths: {deaths}</Text>
			</View>
		</View>
	);
};
