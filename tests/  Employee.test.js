const Employee = require("../library/employee");

test("can I set the name, id, email via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("get role() should produce \"user role\"", () => {
    const testValue = "GithubUser";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("can I get the name, id. email via user", () => {
    const testValue = "GithubUser";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});