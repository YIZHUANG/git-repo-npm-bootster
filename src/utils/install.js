const exec = require("./exec");

const commands = {
  Npm: (package, dev) => `npm install ${package} --save${dev ? "-dev" : ""}`,
  Yarn: (package, dev) => `yarn add ${package} ${dev ? "-D" : ""}`
};
async function install(package, dev = true, packageManager = "Npm") {
  await exec(commands[packageManager](package, dev));
}

module.exports = install;
