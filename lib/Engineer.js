const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer