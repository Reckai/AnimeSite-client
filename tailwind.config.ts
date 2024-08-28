import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans]
			},
			aspectRatio: {
				'18/25': '18 / 25'
			},
			colors: {
				info: '#02a9ff',
				primary: '#5b58fb',
				error: '#d03a52',
				warning: '#f60',
				success: '#06715a',
				secondary: '#20202a',
				'gradient-color-from': '#fdeff9',
				'gradient-color-to': '#03001e',
				'gradient-color-via': '#ec38bc',
				'gradient-color-via-2': '#7303c0',
				'bg-color': '#111117',
				'default-bg': '#26304b',
				'color-text-accent': '#b0b7cb',
				'color-text': '#71799b',
				header: 'rgba(28,29,36,0.6)',
				'form-color': '#2e2f3a',
				'opacity-secondary': ' rgba(32,32,42)',
				'color-el-bg': '#191920'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			margin: {
				16: '16px'
			}
		}
	},
	plugins: []
};
export default config;
