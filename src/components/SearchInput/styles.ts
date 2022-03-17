import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	searchInput: {
		width: '90%',
		borderWidth: 0.5,
		borderRadius: 15,
		borderColor: 'grey',
		minHeight: 40,
		padding: 10,
	},
	searchIconWrapper: {
		width: '10%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
