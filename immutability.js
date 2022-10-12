//immutability code example

let a = {foo: "bar"};
let b = Object.assign({},a);
b.foo = "bar2"
console.log(a);
console.log(b);
console.log(b === a);