const inquirer = require("inquirer");
const fs = require("fs");
const css = require("./templates/css")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let completeTeamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {
            message: "Welcome to the ultimate team profile creator! What is your team name?",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            completeTeamArray.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            completeTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completeTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            completeTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completeTeamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            completeTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("Team has been formed!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${completeTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${css}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${completeTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < completeTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${completeTeamArray[i].name}</h2>
                <h2>${completeTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${completeTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${completeTeamArray[i].email}">${completeTeamArray[i].email}</a>></p>
        `
        if (completeTeamArray[i].officeNumber) {
            object += `
            <p>${completeTeamArray[i].officeNumber}</p>
            `
        }
        if (completeTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${completeTeamArray[i].github}">${completeTeamArray[i].github}</a></p>
            `
        }
        if (completeTeamArray[i].school) {
            object += `
            <p>School: ${completeTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./profile-generated/${completeTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()