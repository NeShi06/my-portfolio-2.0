/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["'Roboto-Mono', 'Arial', 'system-ui'"],
			},
			colors: {
				"primary": "#161719",
				"secondary": "#262729"
			},
		},
	},
	plugins: [],
}
