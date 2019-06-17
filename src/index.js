const fs = require("fs");

const filesToCreate = require("@buildFiles");

const getProjectInfos = require("@utils/getInfo");
const askQuestions = require("@utils/askQuestions");

const dir = ".";
const existingFiles = fs.readdirSync(dir);

async function getAnswers() {
  const projectInformations = await getProjectInfos();
  const answers = await askQuestions(projectInformations);
  return answers;
}

async function doWork() {
  const info = await getAnswers();
  const { overrideAllExistingFiles } = info;
  const promises = [];
  for (const fileToCreate in filesToCreate) {
    if (overrideAllExistingFiles) {
      const fn = () => filesToCreate[fileToCreate](info);
      promises.push(fn);
    } else {
      if (existingFiles.indexOf(fileToCreate) < 0) {
        const fn = () => filesToCreate[fileToCreate](info)
        promises.push(fn);
      }
    }
  }
  await Promise.all(promises.map(task => task()));
}

module.exports = doWork;
