module.exports = () => ({
  type: "list",
  message: "Linter of the repo",
  name: "linter",
  default: "",
  choices: ["Eslint", "Tslint"]
});
