module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "rgba(194, 231, 255, 255)",
                'blue-50': "rgba(223, 243, 255, 255)"
			},
			// fontFamily: {
			// 	serif: ['Times New Roman', 'serif', 'serif-bold'],
			// }
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
