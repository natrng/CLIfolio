const inquirer = require("inquirer");

module.exports = {
  askQuestions: () => {
    const questions = [
      {
        name: "firstname",
        type: "input",
        message: "Enter your first name:",
        validate: (value) => {
          return value.length ? true : "Please enter your first name";
        },
      },
      {
        name: "lastname",
        type: "input",
        message: "Enter your last name:",
        validate: (value) => {
          return value.length ? true : "Please enter your last name";
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter your email address:",
        validate: (value) => {
          return value.length ? true : "Please enter your email address";
        },
      },
      {
        name: "location",
        type: "input",
        message: "Enter your location:",
        validate: (value) => {
          return value.length ? true : "Please enter your location";
        },
      },
      {
        name: "bio",
        type: "input",
        message: "Enter your bio:",
        validate: (value) => {
          return value.length ? true : "Please enter your bio";
        },
      },
      {
        name: "linkedin",
        type: "input",
        message: "Enter your LinkedIn url:",
        validate: (value) => {
          return value.length ? true : "Please enter your LinkedIn url";
        },
      },
      {
        name: "github",
        type: "input",
        message: "Enter your GitHub url:",
        validate: (value) => {
          return value.length ? true : "Please enter your GitHub url";
        },
      },
    ];

    return inquirer.prompt(questions);
  },
};
