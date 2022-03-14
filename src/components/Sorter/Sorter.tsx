import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { CaseTypeEnum } from 'types';
import { styles } from './styles';
import { Option } from './Option';

interface SorterProps {
	sortCase: CaseTypeEnum;
	setSortCase: (sortCase: CaseTypeEnum) => void;
}

export const Sorter: FC<SorterProps> = ({ sortCase, setSortCase }) => {
	const onPress = useCallback(option => setSortCase(option), [setSortCase]);

	return (
		<View style={styles.container}>
			<Option
				isFirst
				isSelected={sortCase === CaseTypeEnum.confirmed}
				option={CaseTypeEnum.confirmed}
				onPress={onPress}
				text="Confirmed"
			/>
			<Option
				isSelected={sortCase === CaseTypeEnum.recovered}
				option={CaseTypeEnum.recovered}
				onPress={onPress}
				text="Recovered"
			/>
			<Option
				isLast
				isSelected={sortCase === CaseTypeEnum.deaths}
				option={CaseTypeEnum.deaths}
				onPress={onPress}
				text="Deaths"
			/>
		</View>
	);
};
