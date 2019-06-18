const exec = require("@utils/exec");
const ora = require("ora");

async function buildChangeLog() {
  try {
    const spinner = ora("Setting up change logs").start();
    await exec("auto-changelog -p");
    spinner.succeed("Successfully set up change logs");
  } catch (e) {
    spinner.fail("Fail to set up change logs");
    throw e;
  }
}

module.exports = buildChangeLog;
