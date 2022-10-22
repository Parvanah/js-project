// inheritance example
class person{
    constructor(name){
        this.name = name;
    }
// methode to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name , id){
// super keyword for calling the above class constructor
    super(name);
    this.id = id;
}
 toString(){
    return (`${super.toString()}, student ID: ${this.id}`);
 }
}
let student1 = new student('lina',24);
console.log(student1.toString());