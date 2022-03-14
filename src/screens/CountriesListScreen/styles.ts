import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: 'white',
		width: '100%',
		paddingHorizontal: '5%',
		alignItems: 'center',
	},
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
