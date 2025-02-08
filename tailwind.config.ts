import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

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
				'header': 'rgba(28,29,36,0.6)',
				'form-color': '#2e2f3a',
				'opacity-secondary': 'rgba(32,32,42)',
				'color-el-bg': '#191920',
				'el-bg':'#f6f6f7',
				'el-bg-hover':'#e6e6e7',
				'el-border':'#23252f'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			margin: {
				16: '16px'
			},
			// Add custom avatar styles here
			// You can also add any other custom styles you need
			avatar: {
				'wrapper': 'flex items-center bg-[rgba(var(--bg-secondary),1)] text-white font-normal text-[1.5rem] h-[4.8rem] justify-center overflow-hidden relative text-center select-none w-[4.8rem]',
				'wrapper-img': 'h-full overflow-hidden relative w-full',
				'wrapper-circle': 'rounded-full'
			}
		}
	},
	plugins: []
};

export default config;
