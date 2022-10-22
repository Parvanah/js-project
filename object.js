// CREAT OBJECT USING AN OBJECT LITERAL
/*
//Defining object
let person ={
    first_name: 'parvanah',
    last_name: 'omarzai',
//Methode
    getFunction : function(){
       return (`the name of the person is ${person.first_name} ${person.last_name}`)
    },
//object within object 
phone_number : {
    mobile:'555897957475',
    landline: '7239'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);
*/




//CRAECT OBJECT USING ON OBJECT CONSTRUCTOR

//using constructor
function person(first_name , last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new istances of person object
let person1 = new person('parvanah','omarzai')
let person2 = new person('lima', 'afghan')

console.log(person1.first_name ,person1.last_name);
console.log(`${person2.first_name} ${person2.last_name}`);