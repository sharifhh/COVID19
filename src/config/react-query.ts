import { focusManager, onlineManager, QueryClient } from 'react-query';
import NetInfo from '@react-native-community/netinfo';
import { AppStateStatus, Platform } from 'react-native';

onlineManager.setEventListener(setOnline => {
	return NetInfo.addEventListener(state => {
		setOnline(state.isConnected || undefined);
	});
});

const client = new QueryClient();

const onAppStateChange = (status: AppStateStatus) => {
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active');
	}
};

export const ReactQuery = { client, onAppStateChange };
