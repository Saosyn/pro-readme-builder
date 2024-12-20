// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Enter a description for your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter installation instructions',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Enter usage information',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter test instructions',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Choose a license',
    name: 'license',
    choices: ['MIT', 'Apache License 2.0', 'GNU General Public License', 'Boost Software License 1.0'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub Username',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Create pro-readme-file');
    writeToFile('./Develop/dist/README.md', generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
