const inquirer = require("inquirer");
// const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const fs = require('fs');
const generateHtml = require("./util/generateHtml");


const questions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is your first and last name?'
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is your Id number?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'OfficeNumber',
        message: 'What is your Office Number?',
    },
]

const menuQuestions = [
    {
        type: 'list',
        name: 'Placement',
        message: 'Choose a Placement.',
        choices: ['Engineer', 'Intern', 'Done'],
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is your first and last name?'
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is your Id number?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is your first and last name?'
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is your Id number?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'School',
        message: 'What is your School name?',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You have successfully generated " + fileName + ".");
    })
}

const employeeArr = [];
//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
           let managerInfo = new manager(data.Name, data.Id, data.Email, data.OfficeNumber);

           employeeArr.push(managerInfo);
           menu();
        })
}

function menu() {
    inquirer.prompt(menuQuestions)
        .then(function (data) {
           if (data.Placement === 'Engineer') {
               console.log('Engineer');
               createEngineer();
           } else if (data.Placement === 'Intern') {
                console.log('Intern');
                createIntern();
           } else {
             let employeeInfo = generateHtml(employeeArr);
             writeToFile('./dist/generatedIndex.html', employeeInfo);
           }
        })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(function (data) {
           let engineerInfo = new engineer(data.Name, data.Id, data.Email, data.Github);

           employeeArr.push(engineerInfo);
           menu();
        })
}

function createIntern() {
    inquirer.prompt(internQuestions)
        .then(function (data) {
           let internInfo = new intern(data.Name, data.Id, data.Email, data.School);

           employeeArr.push(internInfo);
           menu();
        })
}


// Function call to initialize app
init();

