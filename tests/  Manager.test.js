const Manager = require("../library/manager");

test("can I set phone number via constructor", () => {
    const testValue = "managers number";
    const e = new Manager("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("get role() should produce \"Manager\"", () => {
    const testValue = "managers numbe";
    const e = new Manager("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});

test("can I get the office number via tel:", () => {
    const testValue = "managers numbe";
    const e = new Manager("Foo", 1, "test@test.com", testValue );
    expect(e.github).toBe(testValue);
});