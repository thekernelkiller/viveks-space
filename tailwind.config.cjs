module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "rgb(24, 56,52)"
			},
			// fontFamily: {
			// 	serif: ['Times New Roman', 'serif', 'serif-bold'],
			// }
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
