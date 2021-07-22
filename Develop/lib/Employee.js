// TODO: Write code to define and export the Employee class
// const inquirer = require("inquirer");
// const engineer = require("./Engineer");
// const manager = require("./Manager");
// const intern = require("./Intern");
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

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;   
    }
    getId() {
      return this.id;   
    }
    getEmail() {
      return this.email;   
    }
    getRole() {
      return 'Employee';   
    }
  }

module.exports = Employee