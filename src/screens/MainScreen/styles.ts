import { StyleSheet } from 'react-native';
import { Colors } from 'config';

export const styles = StyleSheet.create({
	headerChart: {
		alignSelf: 'center',
		marginVertical: 15,
		shadowColor: Colors.Black,
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { height: 0, width: 0 },
		elevation: 3,
		borderRadius: 10,
	},
});
