const Engineer = require("../lib/engineer")

test("Get role (Should return correct role)", () => {
    const testValue = "Engineer"
    const result = new Engineer("name", 1, 'email@mail.com', 'CobaltFrostfish')
    expect(result.getRole()).toBe(testValue)
})

test("Get GitHub (Should return correct GitHub username)", () => {
    const testValue = 'CobaltFrostfish'
    const result = new Engineer("name", 1, 'email@mail.com', testValue)
    expect(result.getGitHub()).toBe(testValue)
})