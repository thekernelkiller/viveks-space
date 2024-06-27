module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "rgb(102, 43, 35)",
                'blue-50': "rgb(193, 192, 189)"
			},
			// fontFamily: {
			// 	serif: ['Times New Roman', 'serif', 'serif-bold'],
			// }
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
