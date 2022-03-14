import React, { FC } from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Colors } from 'config';

export const FAB: FC = () => {
	return (
		<TouchableOpacity style={styles.touchable}>
			<IoniconsIcon name="add" size={30} color={Colors.White} />
		</TouchableOpacity>
	);
};
