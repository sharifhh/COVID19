import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainRouteParamsList } from 'routes';

export function useMainNavigator<T extends keyof MainRouteParamsList>() {
	const navigation =
		useNavigation<BottomTabNavigationProp<MainRouteParamsList, T>>();
	const route = useRoute<RouteProp<MainRouteParamsList, T>>();

	return { navigation, route };
}
