var objOne = {
    x: 1,
    y: 2
  };
  
  var objTwo = objOne;
  
  // change the x vlaue to 2 by objTwo
  objTwo.x = 2;
  
  // Change the value of key x in objOne as well - pass by reference mechanism
  console.log(objOne); // { x: 2, y: 2 }
  
  // Now what if objTwo initialized with empty object
  objTwo = {};
  
  console.log(objOne); // { x: 2, y: 2 } but expected output = {}
  
