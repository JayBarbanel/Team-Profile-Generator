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

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the Engineers name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'What is the Engineers email?',
        name: 'email',
    }, {
        type: 'input',
        message: 'What is the Engineers id?',
        name: 'id',
    }, {
        type: 'input',
        message: 'What is the Engineers Github?',
        name: 'gitHub',
    }]).then(function(data) {
        console.log(data)
        const engineers = new Engineer(data.name, data.email, data.id, data.officeNumber)
        employees.push(engineer)
        nextPrompt()
    })
}

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the Interns name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'What is the Interns email?',
        name: 'email',
    }, {
        type: 'input',
        message: 'What is the Interns id?',
        name: 'id',
    }, {
        type: 'input',
        message: 'What school did the intern go to?',
        name: 'officeNumber',
    }]).then(function(data) {
        console.log(data)
        const intern = new Intern(data.name, data.email, data.id, data.officeNumber)
        employees.push(intern)
        nextPrompt()
    })
}

function nextPrompt() {
    inquirer.prompt([{
        type: 'list',
        message: 'What do you want to add next?',
        name: 'option',
        choices: ['Engineer', 'Intern', 'Quit']
    }]).then(function(data) {
        if (data.option == "Engineer") {

        }
    })
}

addManager()