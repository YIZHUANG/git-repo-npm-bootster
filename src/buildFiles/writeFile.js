const util = require("util");
const fs = require("fs");

const asynCreateFile = util.promisify(fs.writeFile);
const asyncReadDir = util.promisify(fs.readdir);

async function writeFile(name, content) {
  return await asynCreateFile(name, content, "utf8");
}

module.exports = writeFile;
