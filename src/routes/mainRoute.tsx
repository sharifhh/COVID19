import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CountriesListScreen, MainScreen } from 'screens';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Colors } from 'config';

export type MainRouteParamsList = {
	MainScreen: undefined;
	CountriesList: undefined;
};

const Tab = createBottomTabNavigator<MainRouteParamsList>();

export const MainRoute = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					shadowColor: 'black',
					shadowOpacity: 0.3,
					shadowRadius: 10,
					shadowOffset: { height: 0, width: 0 },
					elevation: 3,
					borderTopStartRadius: 30,
					borderTopEndRadius: 30,
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors.Orange,
			}}>
			<Tab.Screen
				name="MainScreen"
				component={MainScreen}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<AntDesignIcon
							name="home"
							size={focused ? size + 5 : size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="CountriesList"
				component={CountriesListScreen}
				options={{
					tabBarIcon: ({ size, color, focused }) => (
						<IoniconsIcon
							name="ios-globe-outline"
							size={focused ? size + 5 : size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
