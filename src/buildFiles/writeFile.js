const util = require("util");
const fs = require("fs");
const ora = require("ora");

const asynCreateFile = util.promisify(fs.writeFile);
const asyncReadDir = util.promisify(fs.readdir);

async function writeFile(name, content) {
  try {
    const spinner = ora(`Writing content to ${name}....`).start();
    await asynCreateFile(name, content, "utf8");
    spinner.succeed(`Successfully write to ${name}`);
  } catch (e) {
    spinner.fail(`Fail to write to ${name}`);
    throw e;
  }
}

module.exports = writeFile;
