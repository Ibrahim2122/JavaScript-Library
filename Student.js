class Student {
    
    constructor(id, fName, lName) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
    }

    greet() {
        return `Hi there! my name is ${this.fName}`;
    }

    toString() {
        return `The studnet ${this.fName} ${this.lName} has the ID: ${this.id}`;
    }
}

module.exports = Student;