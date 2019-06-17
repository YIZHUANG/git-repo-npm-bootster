const writeFile = require("./writeFile");

async function buildLanguage({ programingLanguage }) {
  const template = `*.* linguist-language=${programingLanguage}`;
  await writeFile(".gitattributes", template);
}

module.exports = buildLanguage;
