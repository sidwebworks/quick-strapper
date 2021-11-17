#!/usr/bin/env node

const { TEMPLATES_REPO, TEMPLATE_OPTIONS } = require("./src/constants");
const {
	emptyDir,
	getPkgAgent,
	isEmpty,
	isValidPackageName,
	normalizeName,
} = require("./src/utils");

const { red, blue } = require("kolorist");
const ora = require("ora");
const degit = require("degit");
const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2), { string: ["_"] });
const prompts = require("prompts");
const createProject = require("./src/createProject");

const CWD = process.cwd();

const TEMPLATES = TEMPLATE_OPTIONS.map(
	(f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

async function main() {
	let targetDir = argv._[0];
	let template = argv.template || argv.t;

	const defaultProjectName = !targetDir ? "quick-project" : targetDir;

	try {
		result = await prompts(
			[
				{
					type: targetDir ? null : "text",
					name: "projectName",
					message: "Project name:",
					initial: defaultProjectName,
					onState: (state) => (targetDir = state.value.trim() || defaultProjectName),
				},
				{
					type: () => (!fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm"),
					name: "overwrite",
					message: () =>
						(targetDir === "."
							? "Current directory"
							: `Target directory "${blue(targetDir)}"`) +
						` is not empty. Remove existing files and continue?`,
				},
				{
					type: (_, { overwrite } = {}) => {
						if (overwrite === false) {
							throw new Error(red("✖") + " Operation cancelled");
						}
						return null;
					},
					name: "overwriteChecker",
				},
				{
					type: (_, { projectName }) => (isValidPackageName(projectName) ? null : "text"),
					name: "packageName",
					message: "Package name:",
					initial: (_, { projectName }) => normalizeName(projectName),
					validate: (dir) => isValidPackageName(dir) || "Invalid package.json name",
				},
				{
					type: template && TEMPLATES.includes(template) ? null : "select",
					name: "framework",
					message:
						typeof template === "string" && !TEMPLATES.includes(template)
							? `"${blue(template)}" isn't a valid template. Please choose from below: `
							: "Select a framework:",
					initial: 0,
					choices: TEMPLATE_OPTIONS.map((framework) => {
						const frameworkColor = framework.color;
						return {
							title: frameworkColor(framework.name),
							value: framework,
						};
					}),
				},
				{
					type: (framework) => (framework && framework.variants ? "select" : null),
					name: "variant",
					message: "Select a variant:",
					choices: (framework) =>
						framework.variants.map((variant) => {
							const variantColor = variant.color;
							return {
								title: variantColor(variant.name),
								value: variant.name,
							};
						}),
				},
			],
			{
				onCancel: () => {
					throw new Error(red("✖") + " Operation cancelled");
				},
			}
		);

		// user choice associated with prompts
		const { framework, overwrite, packageName, variant, projectName } = result;

		const root = path.join(CWD, targetDir);

		if (overwrite) {
			emptyDir(root);
		} else if (!fs.existsSync(root)) {
			fs.mkdirSync(root);
		}

		const url = `${TEMPLATES_REPO}/${framework.name}/${variant}`;

		await createProject(url, root, projectName);
	} catch (cancelled) {
		console.error(cancelled.message);
	}
}

main().catch((e) => console.error(e));
