module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	env: {
		production: {
			plugins: ['transform-remove-console'],
		},
	},
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'react-native-reanimated/plugin',
	],
};
