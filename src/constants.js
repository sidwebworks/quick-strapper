const { yellow, green, cyan, blue, magenta, lightRed, red } = require("kolorist");

module.exports = {
	TEMPLATES_REPO: "https://github.com/sidwebworks/quick-strapper-templates",
	TEMPLATE_OPTIONS: [
		{
			name: "react",
			color: cyan,
			variants: [
				{
					name: "tailwind-app",
					display: "TypeScript",
					color: blue,
				},
			],
		},
		{
			name: "node",
			color: green,
			variants: [
				{
					name: "express-api",
					display: "TypeScript",
					color: blue,
				},
			],
		},
	],
};
