const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Employee = require("../lib/Employee");
test("Create employee", () => {
    const employee = new Employee("name", "role", "id", "email")
    expect(typeof (employee)).toBe("object")
})
test("Create employee name", () => {
    const name = "Jared"
    const employee = new Employee(name, "role", "id", "email")
    expect(employee.getName()).toBe(name)
})
test("Create employee ID", () => {
    const id = "1"
    const employee = new Employee("name", "role", id, "email")
    expect(employee.getid()).toBe(id)
})
test("Create employee email", () => {
    const email = "email@email.com"
    const employee = new Employee("name", "role", "id", email)
    expect(employee.getEmail()).toBe(email)
})
test("Create employee role", () => {
    const employee = new Employee("name", "id", "email",)
    expect(employee.getRole()).toBe('Employee')
})