// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'email',
        message: 'Please link your email adress.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please type your github username'
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
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses were used in this project?',
        choices: ['IBM', 'MIT', 'Eclipse', 'Mozilla', 'Perl']
    }
]

const init = () => {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        fs.writeFile('GeneratedREADME.md', generateMarkdown(data), (err) => err ? console.log('ERROR!') : console.log('README has been generated!'))
    })
}


init();
