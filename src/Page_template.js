const inquirer = require('inquirer');
const fs = require('fs');


const generateTeam = (team) => {

    const generateManager = manager => {
        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">id: ${manager.getId()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
    </ul>
    </div>
    </div>`
    }

    const generateEngineer = engineer => {

        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">id: ${engineer.getId()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item">${engineer.getGitHub()}</li>
    </ul>
    </div>
    </div>`
    }

    const generateIntern = intern => {

        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">id: ${intern.getId()}</li>
    <li class="list-group-item">${intern.getEmail()}</li>
    <li class="list-group-item">${intern.getSchool()}</li>
    </ul>
    </div>
    </div>`
    }

    const html = []
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("")
}

module.exports = team => {

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        
            <title>Team</title>
        </head>
        <body>
            <div class="container-fluid">
        <div class="row">
        <div class="col-12 jumbotron mb-2 bg-danger text-white team-heading">
            <h1 class="text-center">My Team</h1>
            </div>
            </div>
            </div>
        <div class="container">
        <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
        </div>
        </div>
    
        </body>
        </html>`;
}