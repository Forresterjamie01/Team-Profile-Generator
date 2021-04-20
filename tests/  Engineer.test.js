const Engineer = require("../library/engineer");

test("can I set the Github account via constructor"), () => {
    const testValue = "GithubUser";
    const e = new Engingeer("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});