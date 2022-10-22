// Defining a class using es6
class Vehicle{
    constructor(name, maker,engin){
        this.name = name;
        this.maker = maker;
        this.engin = engin;
    }

    getDetails(){
        return (`the name of the bike is ${this.name}.`)
    }
}
//Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki' ,'1340cc');
let bike2 = new Vehicle('Ninja', 'kawasaki' ,'998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());