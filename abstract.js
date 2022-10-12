// creat an Abstract class (cpnstructor function)
function Employee(){
    this.empName = "empName";
    if(this.constructor === Employee){
        throw new Error("you cannot create an Instance of  Abstract class");
    }
};
//Method (function) of our abstract class
Employee.prototype.display=function(){
    return "Employee name is: "+ this.empName;
}
//creat an subclass (constructor finction)
function Manager(fullName){
    this.empName=fullName;
}
//creat an object of subclass (extending abstract class)
Manager.prototype=Object.create(Employee.prototype);
var mang = new Manager("parvanah omarzai");
console.log(mang.display());

