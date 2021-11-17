const degit = require("degit");
const ora = require("ora");
const fs = require("fs/promises");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const { getPkgAgent } = require("./utils");
const { green, cyan } = require("kolorist/dist/cjs");

// const filesToRename = {
// 	_gitignore: ".gitignore",
// };

const createProject = async (url, root, name) => {
	const git = degit(url, {
		verbose: true,
		cache: false,
		force: true,
	});

	const cwd = process.cwd();

	const spinner = ora(`Cloning project template...`).start();

	const renamePkg = async () => {
		let pkg = await fs.readFile(path.join(root, "package.json"), "utf-8");
		pkg = JSON.parse(pkg);

		pkg.name = name;

		await fs.writeFile(path.join(root, "package.json"), JSON.stringify(pkg, null, 2));
	};

	const initGit = async () => {
		spinner.text = "Initializing git";

		await fs.rename(path.join(root, "_gitignore"), path.join(root, ".gitignore"));

		await exec("git init").then(() => (spinner.text = "Finished initializing git"));
	};

	try {
		await git.clone(root);

		await renamePkg();

		await initGit();

		spinner.succeed("Bootstrapping complete!");

		const pkgInfo = getPkgAgent(process.env.npm_config_user_agent);
		const pkgManager = pkgInfo ? pkgInfo.name : "npm";

		console.log(`\nDone. ${cyan("Now run:")}\n`);

		if (root !== cwd) console.log(` cd ${green(path.relative(cwd, root))}`);

		if (pkgManager === "yarn") {
			console.log(` ${green("yarn")}`);
		} else {
			console.log(` ${green(pkgManager)} install`);
		}
	} catch (error) {
		spinner.fail(error.message);
		throw error;
	}
};

module.exports = createProject;
