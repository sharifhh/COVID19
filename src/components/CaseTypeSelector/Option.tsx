import { CaseTypeEnum } from 'types';
import { styles } from './styles';
import { Text, TouchableOpacity } from 'react-native';
import React, { FC, useCallback } from 'react';

interface OptionProps {
	isSelected: boolean;
	isFirst?: boolean;
	isLast?: boolean;
	option: CaseTypeEnum;
	onPress: (option: CaseTypeEnum) => void;
	text: string;
}

export const Option: FC<OptionProps> = ({
	isSelected,
	isFirst,
	isLast,
	option,
	onPress,
	text,
}) => {
	const onPressLocal = useCallback(() => onPress(option), [onPress, option]);

	return (
		<TouchableOpacity
			onPress={onPressLocal}
			style={[
				styles.optionCommon,
				isLast ? styles.lastOption : styles.noEndBorder,
				isFirst ? styles.firstOption : undefined,
				isSelected ? styles.selectedOption : undefined,
			]}>
			<Text style={[isSelected ? styles.selectedText : undefined]}>{text}</Text>
		</TouchableOpacity>
	);
};
