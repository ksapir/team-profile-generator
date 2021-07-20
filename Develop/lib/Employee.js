// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
        
    };
    getId() {
        return this.id
        
    };
    getEmail() {
        return this.email
        
    };
    getRole() {
        return "Employee"
    }
    printEmployee(){
        console.log(this.name)
        console.log(this.id)
        console.log(this.email)
    }
}

module.exports = Employee