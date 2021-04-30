const Employee = require("./Employee")
//this creates the intern and uses the name, email and id from the employee with the super and creates the school function
class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
        
    }
    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern