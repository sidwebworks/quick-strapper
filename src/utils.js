const fs = require("fs");
const path = require("path");

const isEmpty = (dirPath) => {
	return fs.readdirSync(dirPath).length === 0;
};

const emptyDir = (dirPath) => {
	if (!fs.existsSync(dirPath)) return;

	for (const file of fs.readdirSync(dirPath)) {
		const abs = path.resolve(dirPath, file);

		if (fs.lstatSync(abs).isDirectory()) {
			emptyDir(abs);

			fs.rmdirSync(abs);
		} else {
			fs.unlinkSync(abs);
		}
	}
};

const getPkgAgent = (userAgent) => {
	if (!userAgent) return undefined;
	const pkgSpec = userAgent.split(" ")[0];
	const pkgSpecArr = pkgSpec.split("/");
	return {
		name: pkgSpecArr[0],
		version: pkgSpecArr[1],
	};
};

const normalizeName = (projectName) => {
	let res = projectName
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/^[._]/, "")
		.replace(/[^a-z0-9-~]+/g, "-");

	return res;
};

const isValidPackageName = (projectName) => {
	return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
};

module.exports = {
	isValidPackageName,
	normalizeName,
	getPkgAgent,
	emptyDir,
	isEmpty,
};
