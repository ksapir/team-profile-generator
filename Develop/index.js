const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateHTML = require('./util/generateHtml.js');
const employees = []

// inquirer.prompt([
//     {
//         type: "list",
//         message: "What type of employee would you like to add?",
//         choices: ["manager", "engineer", "intern"],
//         name: "tyoeOfEmployee"
//     }
// ]).then(() => {
//     if (input.typeOfEmployee == "manager"){
//         addManager()
//     } else if (input.typeOfEmployee == "engineer"){
//         addEngineer();
//     } else if (input.typeOfEmployee == "intern"){
//         addIntern()
//     } else{
//         console.log("redo")
//     }
// })

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
        const {name, id, email, officeNumber} = managerAnswers
        const manager = new Manager (name, id, email, officeNumber)

        employees.push(manager)
        console.log(manager);
    })


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
    const {name,id,email,github} = engineerAnswers
    const engineer = new Engineer (name,id, email, github)
    
    employees.push(engineer)
    console.log(engineer)
})
}

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
    const {name,id,email,school} = internAnswers
    const intern = new Intern (name,id, email, school)
    
    employees.push(intern)
    console.log(intern)
})
}
