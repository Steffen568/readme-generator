// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptUser = readmeData => {
    if(!readmeData.input) {
        readmeData.input = []
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please eneter your name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please include a brief description')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please link the deployed application.'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for this project?'
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'What is the purpose of your project'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does you project solve?'
        },
        {
            type: 'input',
            name: 'learned',
            message: 'What did you learn?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What code languges did you use in your project?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please list installation instructions.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list any contributors to the project'
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
