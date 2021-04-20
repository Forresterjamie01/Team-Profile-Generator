const Intern = require("../library/intern");

test("can I set the school via the user", () => {
    const testValue = "studentsschool";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("get role() should produce \"Intern\"", () => {
    const testValue = "studentsschool";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("can I get the school via the user", () => {
    const testValue = "studentsschool";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});