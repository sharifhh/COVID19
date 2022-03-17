import React, { FC, useCallback, useMemo, useRef } from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Colors } from 'config';
import BottomSheet, {
	BottomSheetView,
	useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { Controller, useForm } from 'react-hook-form';
import { CaseTypeEnum } from 'types';
import { useReportCases } from 'hooks';
import { CountryInput } from './CountryInput';
import { CaseTypeSelector } from '../CaseTypeSelector';

export const ReportCasesFAB: FC = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT', '85%'], []);
	const {
		animatedHandleHeight,
		animatedSnapPoints,
		animatedContentHeight,
		handleContentLayout,
	} = useBottomSheetDynamicSnapPoints(initialSnapPoints);

	const { reportCases } = useReportCases();

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			country: 'US',
			caseType: CaseTypeEnum.recovered,
			reportedCases: '1',
		},
	});

	const onSubmit = useCallback(
		data => {
			reportCases({
				...data,
				reportedCases: Number(data.reportedCases) || 0,
			});
			reset();
			bottomSheetRef.current?.close();
		},
		[reportCases, reset],
	);

	return (
		<>
			<TouchableOpacity
				onPress={() => {
					bottomSheetRef.current?.snapToIndex(0);
				}}
				style={styles.touchable}>
				<IoniconsIcon name="add" size={30} color={Colors.White} />
			</TouchableOpacity>
			<BottomSheet
				enablePanDownToClose
				index={-1}
				ref={bottomSheetRef}
				snapPoints={animatedSnapPoints}
				handleHeight={animatedHandleHeight}
				contentHeight={animatedContentHeight}
				style={styles.bottomSheet}>
				<BottomSheetView
					style={styles.bottomSheetContentView}
					onLayout={handleContentLayout}>
					<Controller
						control={control}
						render={({ field: { onChange, value } }) => (
							<CountryInput value={value} onChange={onChange} />
						)}
						name="country"
					/>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.numberInput}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								keyboardType="numeric"
							/>
						)}
						name="reportedCases"
					/>
					<Controller
						control={control}
						render={({ field: { onChange, value } }) => (
							<CaseTypeSelector caseType={value} onChange={onChange} />
						)}
						name="caseType"
					/>
					<TouchableOpacity
						onPress={handleSubmit(onSubmit)}
						style={styles.submit}>
						<Text style={styles.submitText}>Submit</Text>
					</TouchableOpacity>
				</BottomSheetView>
			</BottomSheet>
		</>
	);
};
