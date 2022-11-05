
/*
/////////////////////////////////////////////////////////
// How to Create and Initialize a Map in JavaScript
const map = new Map();





////////////////////////////////////////////////////////
//Here's how to create a Map with three key-value pairs:
const freeCodeCampBlog = new Map([
    ['name', 'freeCodeCamp'],
    ['type', 'blog'],
    ['writer', 'Tapas Adhikary'],
  ]);





///////////////////////////////////////////////////////
//How to Add values to a Map in JavaScript
// create a map
const map = new Map();
// Add values to the map
map.set('name', 'freeCodeCamp');
map.set('type', 'blog');
map.set('writer', 'Tapas Adhikary');






///////////////////////////////////////////////////////
//How to Get values from a Map in JavaScript
map.get('name'); // returns freeCodeCamp






//////////////////////////////////////////////////////
//All About Map Keys in JavaScript
// create a Map
const funMap = new Map();
funMap.set(360, 'My House Number'); // number as key
funMap.set(true, 'I write blogs!'); // boolean as key
let obj = {'name': 'tapas'}
funMap.set(obj, true); // object as key
console.log(funMap);







////////////////////////////////////////////////////
//Map Properties and Methods in JavaScript
console.log('size of the map is', map.size);
// returns true, if map has an element with the key, 'John'
console.log(map.has('John')); 
// returns false, if map doesn't have an element with the key, 'Tapas'
console.log(map.has('Tapas')); 
map.delete('Sam'); // removes the element with key, 'Sam'.
// Clear the map by removing all the elements
map.clear(); 
map.size // It will return, 0






///////////////////////////////////////////////////
//MapIterator: keys(), values(), and entries() in JavaScript
const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
  ]);
  console.log(ageMap.keys());
  // Output:
  // MapIterator {"Jack", "Alan", "Bill", "Sam"}
console.log(ageMap.values());
// Output
// MapIterator {20, 34, 10, 9}
console.log(ageMap.entries());
// Output
// MapIterator {"Jack" => 20, "Alan" => 34, "Bill" => 10, "Sam" => 9}






//////////////////////////////////////////////////////
//How to Iterate Over a Map in JavaScript
// with forEach
ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old!`);
 });
 
 // with for-of
 for(const [key, value] of ageMap) {
   console.log(`${key} is ${value} years old!`);
 }






 ///////////////////////////////////////////////////
 //How to Convert an Object into a Map in JavaScript
 const address = {
    'Tapas': 'Bangalore',
    'James': 'Huston',
    'Selva': 'Srilanka'
  };
  const addressMap = new Map(Object.entries(address));
*/






//////////////////////////////////////////////////////
//How to Convert a Map into an Array in JavaScript
const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);
console.log(Array.from(map));
console.log([...map]);

