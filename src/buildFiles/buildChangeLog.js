const exec = require("@utils/exec");

async function buildChangeLog() {
  await exec("auto-changelog -p");
}

module.exports = buildChangeLog;
