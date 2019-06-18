const writeFile = require("./writeFile");
const getPackageJson = require("@utils/getPackageJson");

// will be re-written later so that it doesn't override the exisitng config.

async function buildPackageJson(answers = {}) {
  const {
    repositoryUrl,
    framework,
    programingLanguage,
    githubUsername,
    authorName,
    projectDocumentationUrl,
    projectHomepage,
    projectDescription
  } = answers;
  const packageJson = await getPackageJson();
  const newPackageJson = {
    ...packageJson,
    description: projectDescription || "",
    repository: {
      type: "git",
      url: repositoryUrl
    },
    bugs: {
      url: `${repositoryUrl}/issues`
    },
    keywords: [framework, programingLanguage].filter(
      value => Boolean(value) && value !== "None"
    ),
    author: authorName,
    license: "MIT",
    homepage: projectDocumentationUrl || projectHomepage || repositoryUrl
  };
  await writeFile("package.json", JSON.stringify(newPackageJson, null, 2));
}

module.exports = buildPackageJson;
