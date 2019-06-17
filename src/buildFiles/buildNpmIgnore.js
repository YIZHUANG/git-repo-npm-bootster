const writeFile = require("./writeFile");

async function buildNpmIgnore() {
  const template = `node_modules`;
  await writeFile(".npmignore", template);
}

module.exports = buildNpmIgnore;
