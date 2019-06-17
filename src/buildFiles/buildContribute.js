const writeFile = require("./writeFile");

async function buildContribute() {
  const template = `
  # Contributing

Send a PR or raise an issue to:

- Report/Fix a bug.
- Suggest/Improve the documentation
- Request/Develop a new feature.
  `;
  await writeFile("contributing.md", template);
}

module.exports = buildContribute;
