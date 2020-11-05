const CLI = require("clui");
const chalk = require("chalk");
var fs = require("fs");

const Spinner = CLI.Spinner;

const template = require("../lib/htmlGenerator");

var filePath = "portfolio.html";

module.exports = {
  createPage: async (answers) => {
    const status = new Spinner("Working on your portfolio...");
    status.start();
    let { firstname, lastname, github, linkedin, location, email, bio } = answers;
    const generated = template(firstname, lastname, linkedin, github, location, bio, email);
    fs.writeFile(filePath, generated, (err) => {
      if (err) throw err;
      else {
        status.stop();
        console.log(
          chalk.cyan("portfolio.html has been generated for your use!")
        );
      }
    });
  },
};
