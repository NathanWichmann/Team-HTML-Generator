const Employee = require("./Employee")
//this takes the name, email, id from the employee and uses the super to do so and creates a github function
class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;


    }


    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer