// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }, 
    {
        type: 'list', 
        name: 'license',
        message: 'Which type of license would you like to include?',
        choices: ['MIT', 'Apache', 'GNU', 'Eclipse'], 
    }, 
    {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project?',
    }, 
    {
        type: 'input', 
        name: 'description',
        message: 'Enter a short description of your project.',
    }, 
    {
        type: 'input', 
        name: 'install_cmd', 
        message: 'What is the command to install dependencies?'
    }, 
    {
        type: 'input', 
        name: 'test_cmd',
        message: 'What is the command to run tests?',
    }, 
    {
        type: 'input', 
        name: 'need_to_know', 
        message: 'Is there anything the user needs to know about using the repo?', 
    }, 
    {
        type: 'input', 
        name: 'how_to_contribute', 
        message: 'Is there anything the user needs to know about contributing to the repo?', 
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('README.md', 

    `howdy`

    );
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
