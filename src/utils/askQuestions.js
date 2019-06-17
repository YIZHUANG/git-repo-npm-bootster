/*
MIT License

Copyright (c) 2019 Franck Abgrall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// modified from https://github.com/kefranabg/readme-md-generator

const inquirer = require("inquirer");
const { isNil } = require("lodash");

const questionsBuilders = require("@questions");

const askQuestions = async (projectInfos, skipQuestions = false) => {
  let answersContext = {
    isGithubRepos: projectInfos.isGithubRepos,
    repositoryUrl: projectInfos.repositoryUrl,
    projectPrerequisites: undefined
  };

  for (const questionBuilder of Object.values(questionsBuilders)) {
    const question = questionBuilder(projectInfos, answersContext);
    if (!isNil(question)) {
      const currentAnswerContext = skipQuestions
        ? { [question.name]: getDefaultAnswer(question) }
        : await inquirer.prompt([question]);

      answersContext = {
        ...answersContext,
        ...currentAnswerContext
      };
    }
  }
  return answersContext;
};
const getDefaultAnswer = question => {
  switch (question.type) {
    case "input":
      return question.default || "";
    case "checkbox":
      return question.choices
        .filter(choice => choice.checked)
        .map(choice => choice.value);
    default:
      return undefined;
  }
};

module.exports = askQuestions;
