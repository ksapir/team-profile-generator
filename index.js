const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateHtml = require('./util/generateHtml.js');
const { join } = require('path');
const employees = []

// Function for selecting type of employee
const typeEmployee = () => {
inquirer.prompt([
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        name: "role"
    }
]).then((answer) => {
    if (answer.role === "Manager"){
        addManager()
    } else if (answer.role === "Engineer"){
        addEngineer();
    } else if (answer.role === "Intern"){
        addIntern()
    }
})}

// Function for adding employees
const addEmployee = () => {
    inquirer.prompt([
        {
            type:"confirm",
            message: "Would you like to add another employee?",
            name: "addAnother"
        }
    ]).then((answer) => {
        if(answer.addAnother === true){
            typeEmployee();
        } else{
            attachInfo(employees);
        }
    })}

// Function for adding a manager
const addManager = () => {
 inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of the manager?",
            name: "managerName"
        },
        {
            type: 'input',
            message: "What is the manager's employee ID number?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ]).then((managerAnswers) => {
        const {managerName, managerId, managerEmail, officeNumber} = managerAnswers
        const newManager = new Manager (managerName, managerId, managerEmail, officeNumber)

        employees.push(newManager)
        console.log(newManager);
        addEmployee()
    })
}

// Function for adding an engineer
const addEngineer = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: "What is the name of the engineer?",
        name: "engineerName"
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID number?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    },
]).then((engineerAnswers)=> {
    const {engineerName,engineerId,engineerEmail,github} = engineerAnswers
    const newEngineer = new Engineer (engineerName,engineerId,engineerEmail,github)
    
    employees.push(newEngineer)
    console.log(newEngineer)
    addEmployee()
})
}

// Function for adding an intern.
const addIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the name of the intern?",
        name: "internName"
    },
    {
        type: 'input',
        message: "What is the intern's employee ID number?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Where does the intern go to school?",
        name: "school"
    },
]).then((internAnswers)=> {
    const {internName,internId,internEmail,school} = internAnswers
    const newIntern = new Intern (internName,internId,internEmail, school)
    
    employees.push(newIntern)
    console.log(newIntern)
    addEmployee()
})
}

const attachInfo = employees => {
fs.writeFile('./src/index.html', generateHtml(employees), (err) =>
    err ? console.log('Error!') : console.log('File Created!')
)}

typeEmployee()