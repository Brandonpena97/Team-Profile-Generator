const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML')

const inquirer = require("inquirer")
const fs = require('fs');


const employeeArray = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        }, {
            type: "input",
            name: "managerId",
            message: "What is the id for this manager?"
        }, {
            type: "input",
            name: "managerEmail",
            message: "What is the email for this manager?"
        }, {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the office number for this manager?"
        }
    ])
        .then((answers) => {
            const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

            employeeArray.push(newManager)
            
            promptAction()
        })
}


function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is this Engineer name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the id for this Engineer?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the email for this engineer?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "what is this engineer Github username?"
        }
    ])
    .then((answers) => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        employeeArray.push(newEngineer)
        promptAction()

    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is this Interns name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the id for this Intern?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the email for this Intern?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did this Intern go to?"
        }
    ])
    .then((answers) => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        employeeArray.push(newIntern)
        promptAction()

    })
}

function promptAction() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "Add new Engineer",
            "Add new Intern",
            "Finish building team and generate HTML."
        ]
    }])
        .then((answer) => {
            if (answer.action == "Add new Engineer") {
                createEngineer();
            } else if (answer.action == "Add new Intern") {
                createIntern();
            } else if (answer.action == "Finish building team and generate HTML.") {

                // call your end function that will generate the HTML
                endFunction();
            }
        })
} 







const endFunction = () => {
    const htmlTemplate = generateHTML(employeeArray);

    fs.writeFile("./dist/index.html", htmlTemplate, () => {
        console.log("HTML created!")
    })

}

