import React, { FC } from 'react';
import CountryFlag from 'react-native-country-flag';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const CountryCard: FC<Omit<CountryData, 'slug'>> = ({
	iso2,
	name,
	confirmed,
	deaths,
	recovered,
}) => {
	return (
		<View style={styles.container}>
			<CountryFlag isoCode={iso2} size={45} />
			<View style={styles.countryData}>
				<Text style={styles.title}>{name}</Text>
				<Text>Confirmed: {confirmed}</Text>
				<Text>Recovered: {recovered}</Text>
				<Text>Deaths: {deaths}</Text>
			</View>
		</View>
	);
};
