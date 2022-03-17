import React, { FC, useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { useCountriesQuery } from 'hooks';
import { SearchInput } from '../SearchInput';
import { styles } from './styles';

interface CountryInputProps {
	value?: string;
	onChange: (countryISO: string) => void;
}

export const CountryInput: FC<CountryInputProps> = ({
	value = 'US',
	onChange,
}) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const { data } = useCountriesQuery({ searchQuery });
	const showModal = useCallback(() => setModalVisible(true), []);
	const hideModal = useCallback(() => setModalVisible(false), []);
	const onPress = useCallback(
		countryISO => {
			onChange(countryISO);
			hideModal();
		},
		[hideModal, onChange],
	);
	return (
		<>
			<TouchableOpacity onPress={showModal} style={styles.countryInputWrapper}>
				<CountryFlag isoCode={value} size={15} />
				<Text style={styles.countryLabel}>{value}</Text>
			</TouchableOpacity>
			<Modal
				isVisible={isModalVisible}
				onBackButtonPress={hideModal}
				onBackdropPress={hideModal}>
				<View style={styles.modalContent}>
					<SearchInput setSearch={setSearchQuery} />
					<FlatList
						data={data}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => onPress(item.iso2)}
								style={styles.countryRowWrapper}>
								<CountryFlag isoCode={item.iso2} size={25} />
								<Text style={styles.countryLabel}>{item.name}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</Modal>
		</>
	);
};
