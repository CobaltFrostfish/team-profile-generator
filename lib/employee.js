class Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role,
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;