import React, { FC } from 'react';
import { styles } from './styles';
import { TextInput, View } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

interface SearchInputProps {
	setSearch: (text: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ setSearch }) => {
	return (
		<View style={styles.row}>
			<TextInput
				style={styles.searchInput}
				onChangeText={text => setSearch(text)}
				returnKeyType="search"
				placeholder="Enter country name or iso code ..."
				autoFocus={false}
			/>
			<View style={styles.searchIconWrapper}>
				<IoniconsIcon name="search" size={20} color="grey" />
			</View>
		</View>
	);
};
