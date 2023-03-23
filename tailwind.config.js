/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
// const plugin = require('tailwindcss/plugin')

// module.exports = {
//   // ...
//   plugins: [
//     plugin(function ({ addComponents, theme }) {
//       addComponents({
//         '.card': {
//           backgroundColor: theme('colors.white'),
//           borderRadius: theme('borderRadius.lg'),
//           padding: theme('spacing.6'),
//           boxShadow: theme('boxShadow.xl'),
//         }
//       })
//     })
//   ]
// }