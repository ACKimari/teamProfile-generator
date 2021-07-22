// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const engineer = require("./Engineer");
const manager = require("./Manager");
const intern = require("./Intern");
// const fs = require('fs');

// const generateTeam = (team) => {
//     inquirer.prompt([
//         {
//         type: 'list',
//         name: 'role',
//         message: "What is your role?",
//         choices: ['Manager', 'Engineer', 'Intern'],
//         },
        
//     ])
//     .then((team) => {
//         const teamContent =generateTeam(team);
    
//         fs.writeFile('team.html', teamContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created team.html!')
//         );
//     });
//         const generateManager = (manager) => {
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'Name',
//                     message: 'What is your first and last name?'
//                 },
//                 {
//                     type: 'input',
//                     name: 'Id',
//                     message: 'What is your Id number?',
//                 },
//                 {
//                     type: 'input',
//                     name: 'Email',
//                     message: 'What is your email?',
//                 },
//                 {
//                     type: 'input',
//                     name: 'OfficeNumber',
//                     message: 'What is your Office Number?',
//                 },
//             ])
//             .then((manager) => {
//                 const 
//             })
//         }
// }

function Employee(Name, Role, Id, Email, OfficeNumber, Github, School) {
    this.name = Name
    this.role = Role
    this.id = Id
    this.email = Email
    this.officeNumber = OfficeNumber
    this.github = Github
    this.school = School
};

let engineer = new Employee
engineer.name = "";
engineer.role = "";
engineer.id = "";
engineer.email = "";
engineer.github = "";

let manager = new Employee
manager.name = "";
manager.role = "";
manager.id = "";
manager.email = "";
manager.officeNumber = "";

let intern = new Employee
intern.name = "";
intern.role = "";
intern.id = "";
intern.email = "";
intern.school = "";

module.exports = Employee