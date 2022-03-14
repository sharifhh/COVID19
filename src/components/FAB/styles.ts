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
});
