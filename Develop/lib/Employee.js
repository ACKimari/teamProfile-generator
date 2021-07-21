// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const engineer = require("./Engineer");
const manager = require("./Manager");
const intern = require("./Intern");



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

