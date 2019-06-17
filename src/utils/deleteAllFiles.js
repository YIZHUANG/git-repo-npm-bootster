const fs = require("fs");
const filesToDelete = [
  "contributing.md",
  "CHANGELOG.md",
  ".npmignore",
  "LICENSE",
  "README.md",
  ".gitattributes",
  "tslint.json"
];
const deleteFile = name => {
  fs.unlinkSync(name);
};
const filesInCurrentDir = () => {
  const dir = ".";
  const files = fs.readdirSync(dir);
  return files;
};
const deleteAllFiles = () => {
  const files = filesInCurrentDir();
  for (const fileToDelete of filesToDelete) {
    if (files.indexOf(fileToDelete) > -1) {
      deleteFile(fileToDelete);
    }
  }
};
deleteAllFiles();
