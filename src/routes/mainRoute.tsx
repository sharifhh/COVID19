import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CountriesListScreen, MainScreen } from 'screens';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export type MainRouteParamsList = {
	MainScreen: undefined;
	CountriesList: undefined;
};

const Tab = createBottomTabNavigator<MainRouteParamsList>();

export const MainRoute = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="MainScreen"
				component={MainScreen}
				options={{
					tabBarLabel: 'Main',
					tabBarIcon: ({ size, color }) => (
						<FontistoIcon name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="CountriesList"
				component={CountriesListScreen}
				options={{
					tabBarLabel: 'Countries',
					tabBarIcon: ({ size, color }) => (
						<FontistoIcon name="world-o" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
