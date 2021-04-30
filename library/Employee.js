//this creates the class of employee and constructs the bases for the other 3 name email id 
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "employee"
    }
}

module.exports = Employee