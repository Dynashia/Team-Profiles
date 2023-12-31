const Employee = require('.lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getManager() {
        return {
            name:  this.getName(),
            id: this.getId(),
            email: this.getEmail(),
            officeNum: this.getOfficeNum(),
            Role: this.getRole()
        }
    }
}


module.exports = Manager;