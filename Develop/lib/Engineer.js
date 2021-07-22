// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Employee {
    constructor (name) {
        this.name = name;
    }
    engineerName(){
        return `Name: ${this.name}`;
    }
}

class Engineer extends Employee{
    constructor(name, role)
}

module.exports = Engineer