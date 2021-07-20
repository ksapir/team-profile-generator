// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Manager extends Employee{
    constructor(name,officeNumber,email){
    super(name,135,email);
    this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOffice(){
        return this.officeNumber;
    }
}

const larry = new Manager("Karen", 170, "k@k.k");
larry.printEmployee();
larry.getOffice()
module.exports = Manager