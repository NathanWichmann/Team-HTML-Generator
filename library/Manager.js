const Employee = require("./Employee")
//this creats the manager calls and uses the name, email, id with the super and creates the get office number function
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }


    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager