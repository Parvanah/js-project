
/////////////////////////////////////////////////
//How to Create and Initialize a Set in JavaScript
const set = new Set();
console.log(set);






////////////////////////////////////////////////
//Here's how to create a Set with some initial values:
const fruteSet = new Set(['ğ', 'ğ', 'ğ', 'ğ']);
console.log(fruteSet);







///////////////////////////////////////////////
//Set Properties and Methods in JavaScript
// Create a set - saladSet
const saladSet = new Set();
// Add some vegetables to it
saladSet.add('ğ'); // tomato
saladSet.add('ğ¥'); // avocado
saladSet.add('ğ¥'); // carrot
saladSet.add('ğ¥'); // cucumber
console.log(saladSet);
saladSet.add('ğ¥');
console.log(saladSet);
// The salad has ağ¥, so returns true
console.log('Does the salad have a carrot?', saladSet.has('ğ¥'));
// The salad doesn't have ağ¥¦, so returns false
console.log('Does the salad have broccoli?', saladSet.has('ğ¥¦'));
saladSet.delete('ğ¥');
console.log('I do not like ğ¥, remove from the salad:', saladSet);








//////////////////////////////////////////////////
//How to Iterate Over a Set in JavaScript
// Create a Set
const houseNos = new Set([360, 567, 101]);
// Get the SetIterator using the `values()` method
console.log(houseNos.values());








/////////////////////////////////////////////////////
//How to Enumerate over a Set in JavaScript
// with forEach
houseNos.forEach((value) => {
    console.log(value);
 });
 // with for-of
 for(const value of houseNos) {
    console.log(value);
  }






  //////////////////////////////////////////////////
  //Unique values from an array using the Set in JavaScript
  // Create a mixedFruit array with a few duplicate fruits
const mixedFruit = ['ğ', 'ğ', 'ğ', 'ğ', 'ğ', 'ğ', 'ğ'];
// Pass the array to create a set of unique fruits
const mixedFruitSet = new Set(mixedFruit);
console.log(mixedFruitSet)








//////////////////////////////////////////////////////
//Set and Object in JavaScript
// Create a person object
const person = {
    'name': 'Alex',
    'age': 32
  };
 // Create a set and add the object to it
 const pSet = new Set();
 pSet.add(person);
 console.log(pSet);