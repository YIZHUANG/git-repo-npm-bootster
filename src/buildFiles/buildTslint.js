const exec = require("@utils/exec");
const ora = require("ora");

const install = require("@utils/install");
const writeFile = require("./writeFile");
const getPackageJson = require("@utils/getPackageJson");

const tslintConfig = () => {
  return {
    defaultSeverity: "error",
    rules: {}
  };
};
async function configureTslint() {
  await writeFile("tslint.json", JSON.stringify(tslintConfig(), null, 2));
}
async function buildScript() {
  const packageJson = await getPackageJson();
  const newPackageJson = {
    ...packageJson,
    scripts: {
      ...(packageJson.scripts || {}),
      lint: 'tslint --fix "src/**/*.ts" "src/**/*.tsx" "src/**/*.js"'
    }
  };
  await writeFile("package.json", JSON.stringify(newPackageJson, null, 2));
}
async function buildTslint(answers) {
  const { packageManager, programingLanguage } = answers;
  if (programingLanguage === "TypeScript") {
    try {
      const spinner = ora("Setting up tslint").start();
      await install("tslint", true, packageManager);
      spinner.text = "Successfully installed Tslint, configuring tslint";
      await configureTslint();
      await buildScript();
      spinner.succeed("Successfully set up tslint");
    } catch (e) {
      spinner.fail("Fail to set up tslint");
      throw e;
    }
  }
}

module.exports = buildTslint;
