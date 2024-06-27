module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "rgb(4, 4, 68)",
                'blue-50': "rgb(247, 248, 252)"
			},
			// fontFamily: {
			// 	serif: ['Times New Roman', 'serif', 'serif-bold'],
			// }
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
