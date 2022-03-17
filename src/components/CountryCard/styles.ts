import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
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
	},
	countryData: { marginStart: 10 },
	title: { fontSize: 20, fontWeight: '600' },
});
