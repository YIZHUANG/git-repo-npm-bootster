const writeFile = require("./writeFile");
const generateContribute = require("generate-contributing");

async function buildContribute(answer) {
  const content = await generateContribute(answer);
  await writeFile("contributing.md", content);
}

module.exports = buildContribute;
