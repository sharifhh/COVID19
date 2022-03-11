/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainRoute } from 'routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { QueryClientProvider } from 'react-query';
import { ReactQuery } from 'config';
import useAppState from 'react-native-appstate-hook';

const mainStyles = StyleSheet.create({
	RNGHContainer: { flex: 1 },
});

const App = () => {
	useAppState({
		onChange: ReactQuery.onAppStateChange,
	});

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<GestureHandlerRootView style={mainStyles.RNGHContainer}>
					<QueryClientProvider client={ReactQuery.client}>
						<MainRoute />
					</QueryClientProvider>
				</GestureHandlerRootView>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
