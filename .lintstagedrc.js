export default {
	"*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": [
		'cspell lint "(packages|apps)/**/*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}"'
	],
	"*.{js,ts,vue,md}": ["prettier --write", "eslint"]
};
