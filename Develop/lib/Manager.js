// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole(){
        console.log("Manager");
        return "Manager"
    }
    getOfficeNumber(){
        console.log(this.officeNumber)
        return this.officeNumber;
    }
}

const larry = new Manager("Karen", 40, "k@k.k", 130);

larry.getRole()
module.exports = Manager