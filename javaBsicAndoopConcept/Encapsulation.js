// Encapsulation example
/*
class person{
   constructor(name, id){
    this.name = name;
    this.id = id;
   }
   add_Address(add){
    this.add = add;
   }
   getDtailes(){
    console.log(`name is ${this.name}, Address is: ${this.add}`);
   }
}

let person1 = new person('parvanah' ,22)
person1.add_Address('Afghanistan')
person1.getDtailes();
*/


//another example in Abstraction '
function person(fname, lname){
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess =function(){
        return (`first name is: ${firstname} last name is: ${lastname}`);
    }
    this.getDetails_noaccess = function(){
        return (`first name is: ${firstname} last name is: ${lastname}.`);
    }
}
let person1 = new person('muhammad','ahmadi');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess());