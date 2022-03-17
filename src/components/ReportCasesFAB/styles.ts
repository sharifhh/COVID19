import { StyleSheet } from 'react-native';
import { Colors } from 'config';

export const styles = StyleSheet.create({
	touchable: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: Colors.Orange,
		position: 'absolute',
		end: 15,
		bottom: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottomSheet: {
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { height: 0, width: 0 },
		elevation: 3,
	},
	bottomSheetContentView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40,
	},
	numberInput: {
		paddingVertical: 10,
		width: '100%',
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.Black,
	},
	submit: {
		backgroundColor: Colors.Orange,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		marginTop: 10,
		marginBottom: 40,
		width: '80%',
		borderRadius: 50,
	},
	submitText: { color: Colors.White },

	// Country Input
	countryInputWrapper: {
		paddingBottom: 10,
		flexDirection: 'row',
		width: '100%',
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.Black,
		alignItems: 'center',
	},
	modalContent: {
		padding: 15,
		overflow: 'hidden',
		borderRadius: 20,
		width: '100%',
		height: '70%',
		backgroundColor: Colors.White,
	},
	countryRowWrapper: {
		paddingVertical: 15,
		flexDirection: 'row',
		width: '100%',
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.Black,
		alignItems: 'center',
	},
	countryLabel: { marginStart: 10 }
});
