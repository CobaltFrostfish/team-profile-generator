const Intern = require("../lib/intern")

test("Get role (Should return correct role)", () => {
    const testValue = "Intern"
    const result = new Intern("name", 1, 'email@mail.com', "University of Denver")
    expect(result.getRole()).toBe(testValue)
})

test("Get school (Should return correct school)", () => {
    const testValue = 'University of Denver'
    const result = new Intern("name", 1, 'email@mail.com', testValue)
    expect(result.getSchool()).toBe(testValue)
})