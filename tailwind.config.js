/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
	theme: {
		extend: {
			colors: {
				['light-blue']: '#78b5da',
			},
			animation: {
				['pulse-slow']: 'pulse-slow 4s ease-in infinite',
			},
			keyframes: {
				['pulse-slow']: {
					'50%': { opacity: '0' },
				},
			},
		},
	},
	plugins: [],
};
