const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const employees = []

function addManager() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the Managers name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'What is the Managers email?',
        name: 'email',
    }, {
        type: 'input',
        message: 'What is the Managers id?',
        name: 'id',
    }, {
        type: 'input',
        message: 'What is the Managers office number?',
        name: 'officeNumber',
    }]).then(function(data) {
        console.log(data)
        const manager = new Manager(data.name, data.email, data.id, data.officeNumber)
        employees.push(manager)
        nextPrompt()
    })
}

function nextPrompt() {
    inquirer.prompt([

    ])
}

addManager()