//create function constructor
function person(firstname, lastname, age, eye){ 
    this.first_name = firstname;
    this.last_name = lastname;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new person("john","doe", 50, "blue");
const myMother = new person("sally","rally", 48, "green");
console.log(myFather);
console.log(myMother);