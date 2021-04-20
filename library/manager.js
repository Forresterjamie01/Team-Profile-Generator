const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email) {
        super(name, id, email);
        this.phonenumber = this.phonenumber;
    }

    getPhoneNumber() {
        return this.phonenumber
    };

    getRole() {
        return "Manager"
    };

}

    module.exports = Manager 