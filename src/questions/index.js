const questions = require('readme-md-generator/src/questions')

module.exports = {
  ...questions,
  askLanguage: require("./language"),
  askLinter: require("./linter"),
  askFramework: require("./framework"),
  askPackageMangaer: require('./packageManager'),
  overrideAllExistingFiles: require('./override-all-existing-files'),
  overrideReadMe: require('./override-read-me')
};