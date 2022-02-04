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
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
function generateMarkdown({project_name, description, install_cmd, need_to_know, how_to_contribute, test_cmd, github, email}) {
    
    return `# ${project_name}    
    
    ---
    
    ## Description     
    
    ${description}

    ---
    
    ## Table of Contents    
    


    --- 
    
    ## Installation    

    The command to install dependencies is ${install_cmd}.

    --- 

    ## Usage    
    
    ${need_to_know}

    --- 

    ## License    

    --- 

    ## Contributing    

    ${how_to_contribute}

    ---

    ## Tests    
    
    The command to run tests is ${test_cmd}. 

    --- 

    ## Questions    

    Github repository:   
    github.com/${github}   
    Email:    
    ${email}    
    `;
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
