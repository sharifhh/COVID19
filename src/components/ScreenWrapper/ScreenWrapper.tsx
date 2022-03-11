import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

export const ScreenWrapper: FC = ({ children }) => (
	<SafeAreaView style={styles.container}>{children}</SafeAreaView>
);
