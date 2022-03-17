import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { CaseTypeEnum } from 'types';
import { styles } from './styles';
import { Option } from './Option';

interface CaseTypeSelectorProps {
	caseType: CaseTypeEnum;
	onChange: (sortCase: CaseTypeEnum) => void;
}

export const CaseTypeSelector: FC<CaseTypeSelectorProps> = ({ caseType, onChange }) => {
	const onPress = useCallback(option => onChange(option), [onChange]);

	return (
		<View style={styles.container}>
			<Option
				isFirst
				isSelected={caseType === CaseTypeEnum.confirmed}
				option={CaseTypeEnum.confirmed}
				onPress={onPress}
				text="Confirmed"
			/>
			<Option
				isSelected={caseType === CaseTypeEnum.recovered}
				option={CaseTypeEnum.recovered}
				onPress={onPress}
				text="Recovered"
			/>
			<Option
				isLast
				isSelected={caseType === CaseTypeEnum.deaths}
				option={CaseTypeEnum.deaths}
				onPress={onPress}
				text="Deaths"
			/>
		</View>
	);
};
