//packages
//fs allows us to use system commands
const fs = require("fs");
//path allows additional uses and built into js node
const path = require("path");
//inquirer allows us to use inquirer package installed
const inquirer = require("inquirer");
//utility page
const generateMarketdown = require("./Develop/utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "what is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "write a short description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "what licenses should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    deafault: "npm 1"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests",
    deafault: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "what does the user need to know about using the repo?"
  },

  {
    type: "input",
    name: "contributing",
    message: "what does the user need to know about contributing to the repo?",
  }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarketdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
