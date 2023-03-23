// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
module.exports = {
	plugins: [
		'postcss-import',
		'postcss-flexbugs-fixes',
		'postcss-nested',
		'postcss-custom-properties',
		'tailwindcss',
		'autoprefixer',
	],
}