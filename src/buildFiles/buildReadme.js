const readme = require("readme-md-generator/src/readme");

async function buildReadme(answers) {
  const { overrideReadMe } = answers;
  if (overrideReadMe) {
    const readmeContent = await readme.buildReadmeContent(answers, "default");
    await readme.writeReadme(readmeContent);
  }
}
module.exports = buildReadme;
