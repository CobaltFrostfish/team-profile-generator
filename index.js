const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/Page_template");
const theTeam = [];
const queMananger = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
    {
        type: "list",
        name: "team",
        message:
            "Do you want to add a member to the team? If yes, pick their role.",
        choices: ["Engineer", "Intern", "Team is full"],
    },
];
const queEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "GitHub",
                message: " What is the engineer's GitHub username?",
            },
            {
                type: "list",
                name: "team",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "Team is full"],
            },
        ])
        .then((data) => {
            theTeam.push(
                new Engineer(data.name, data.Id, data.email, data.GitHub)
            );
            if (data.team === "Engineer") {
                queEngineer();
            } else if (data.team === "Intern") {
                queIntern();
            } else {
                console.log(theTeam)
                let data = generateHTML(theTeam);
                fs.writeFileSync("dist/team.html", data, "utf-8");
            }
        });
};
const queIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
            {
                type: "list",
                name: "team",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "Team is full"],
            },
        ])
        .then((data) => {
            theTeam.push(
                new Intern(data.name, data.Id, data.email, data.school)
            );
            if (data.team === "Engineer") {
                queEngineer();
            } else if (data.team === "Intern") {
                queIntern();
            } else {
                let data = generateHTML(theTeam);
                fs.writeFileSync("dist/team.html", data, "utf-8");
            }
        });
};
const init = () => {
    inquirer.prompt(queMananger).then((data) => {
        console.log(data)
        theTeam.push(
            new Manager(data.name, data.Id, data.email, data.officeNumber)
        );
        if (data.team === "Engineer") {
            queEngineer();
        } else if (data.team === "Intern") {
            queIntern();
        } else {
            let data = generateHTML(theTeam);
            fs.writeFileSync("dist/team.html", data, "utf-8");
        }
    });
};
init();
