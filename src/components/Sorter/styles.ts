import { StyleSheet } from 'react-native';
import { Colors } from 'config';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 15,
		marginBottom: 5,
	},
	optionCommon: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'grey',
		borderWidth: 0.5,
		paddingVertical: 10,
		backgroundColor: Colors.White,
	},
	noEndBorder: {
		borderEndWidth: 0,
	},
	firstOption: {
		borderTopStartRadius: 15,
		borderBottomStartRadius: 15,
	},
	lastOption: {
		borderTopEndRadius: 15,
		borderBottomEndRadius: 15,
	},
	selectedOption: {
		backgroundColor: Colors.Orange,
	},
	selectedText: { color: Colors.White },
});
