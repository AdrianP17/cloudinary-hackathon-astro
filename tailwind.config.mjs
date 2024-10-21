/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				creepster: ['creepster', 'serif'],
				sans: ['Inter Variable', 'Inter' , ...defaultTheme.fontFamily.sans]
			},
		},
		colors: {
			bg: '#221913',
			text: '#E9E6E2',
			accent: '#E77E07'
		},
	},
	plugins: [],
}
