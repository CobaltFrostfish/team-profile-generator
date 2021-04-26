const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id)
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub
    }
}
module.exports = Engineer;