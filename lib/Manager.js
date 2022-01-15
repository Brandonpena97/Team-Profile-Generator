const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager

//const newManager = new Manager("Peter", 2, "peter@mail.com", 1000)
//console.log(newManager)