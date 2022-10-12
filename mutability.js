//mutability code example

let a = {
    foo: 'bar'
};

let b = a;
b.foo = 'test2'

console.log(b.foo);
console.log(a === b);

