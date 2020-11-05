const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./lib/inquirer");
const portfolio = require("./lib/portfolio")

clear();

console.log(
  chalk.cyan(figlet.textSync("CLIfolio", { horizontalLayout: "full" }))
);

const run = async () => {
  const answers = await inquirer.askQuestions();

  portfolio.createPage(answers)
};

run();
