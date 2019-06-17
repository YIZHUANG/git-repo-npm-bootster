const buildContribute = require("./buildContribute");
const buildLanguage = require("./buildLanguage");
const buildLicense = require("./buildLicense");
const buildNpmIgnore = require("./buildNpmIgnore");
const buildReadme = require("./buildReadme");
const buildTslint = require("./buildTslint");
const buildPackageJson = require("./buildPackageJson");
const buildChangeLog = require("./buildChangeLog");
const filesToCreate = {
  "contributing.md": buildContribute,
  "CHANGELOG.md": buildChangeLog,
  ".npmignore": buildNpmIgnore,
  LICENSE: buildLicense,
  "README.md": buildReadme,
  ".gitattributes": buildLanguage,
  "tslint.json": buildTslint,
  "package.json": buildPackageJson
};

module.exports = filesToCreate;
