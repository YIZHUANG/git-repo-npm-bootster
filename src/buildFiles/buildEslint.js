const exec = require("@utils/exec");
const ora = require("ora");

const install = require("@utils/install");
const writeFile = require("./writeFile");
const getPackageJson = require("@utils/getPackageJson");

const eslintConfig = () => {
  return {
    parser: "babel-eslint",
    env: {
      browser: true
    },
    extends: "airbnb"
  };
};
async function configureEslint() {
  await writeFile(".eslintrc", JSON.stringify(eslintConfig(), null, 2));
}
async function buildScript() {
  const packageJson = await getPackageJson();
  const newPackageJson = {
    ...packageJson,
    scripts: {
      ...(packageJson.scripts || {}),
      lint: "eslint ./ --fix --ext .jsx --ext .js",
      "lint:fix": "eslint ./ --fix --ext .jsx --ext .js --fix"
    }
  };
  await writeFile("package.json", JSON.stringify(newPackageJson, null, 2));
}
async function buildEslint(answers) {
  const { packageManager, linter } = answers;
  if (linter === "Eslint") {
    try {
      const spinner = ora("Setting up eslint").start();
      await install("eslint eslint-config-airbnb", true, packageManager);
      spinner.text = "Successfully installed eslint, configuring eslint";
      await configureEslint();
      await buildScript();
      spinner.succeed("Successfully set up eslint");
    } catch (e) {
      spinner.fail("Fail to set up eslint");
      throw e;
    }
  }
}

module.exports = buildEslint;
