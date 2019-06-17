module.exports = () => ({
    type: "list",
    message: "Choose a package manager",
    name: "packageManager",
    default: "Npm",
    choices: ["Npm", "Yarn"]
  });
  