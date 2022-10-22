  
    // Array of objects
    var myObject = {
        jhon: {
            name: 'jhon',
            age: 12,
            gender: 'male'
        },
        rita: {
            name: 'rita',
            age: 32,
            gender: 'male'
        }
    };
  
    // Using DOT notation
    console.log('using DOT:' + myObject.jhon.gender);
  
    // Using [] notation
    console.log('using []:' + myObject.rita['age']);
  
    // Using delete keyword
    delete myObject.rita;
  
    // Iterating using for..in loop
    for (var key in myObject) {
  
        // logs values in myObject
        console.log(myObject[key]);
    }