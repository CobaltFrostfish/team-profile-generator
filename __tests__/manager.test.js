const Manager = require("../lib/manager")

test("Get role (Should return correct role)", () => {
    const testValue = "Manager"
    const result = new Manager("name", 1, 'email@mail.com', 312)
    expect(result.getRole()).toBe(testValue)
})

test("Get office number (Should return correct office number)", () => {
    const testValue = 312
    const result = new Manager("name", 1, 'email@mail.com', testValue)
    expect(result.getOfficeNumber()).toBe(testValue)
})