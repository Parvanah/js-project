////////////////////////////////////////
//List
var list = new List([1, 2, 3]);
list.splice(1, 1, 6, 5);
// [2]
list.toArray();
// [1,6,5,3]








/////////////////////////////////////////
//push
var array = [1, 2, 3];
array.push(6, 4);
// 5
array
// [1,2,3,6,4]
var sortedSet = new SortedSet([2, 8, 5]);
sortedSet.toArray();
// [2,5,8]
sortedSet.push(1, 6, 14);
sortedSet.toArray();
// [1,2,5,6,8,14]







////////////////////////////////////////
//pop
var array = [1, 2, 3];
array.pop();
// 3
array
// [1,2]
var heap = new Heap([2, 8, 5]);
heap.pop();
// 8
heap.toArray();
// [5,2]





/////////////////////////////////////////////
//shift
var list = new List([1, 2, 3]);
list.shift();
// 1
list.toArray();
// [2,3]
var sortedSet = new SortedSet([11, 8, 5]);
sortedSet.shift();
// 5
sortedSet.toArray();
// [8,11]





////////////////////////////////////////////
//unshift
var list = new List([1, 2, 3]);
list.unshift(6, 4);
list.toArray();
// [6,4,1,2,3]
var sortedSet = new SortedSet([2, 8, 5]);
sortedSet.toArray();
// [2,5,8]
sortedSet.unshift(1, 6, 14);
sortedSet.toArray();
// [1,2,5,6,8,14]






////////////////////////////////////////////
//peek
var array = [1, 2, 3];
array.peek();
// 1





////////////////////////////////////////////
//poke
var array = [1, 2, 3];
array.poke(4);
array
// [4,2,3]



//////////////////////////////////////////
//get
var nameSet = new Set([{name: "Kris", github: "kriskowal"}],
    // change uniqueness
    function (a, b) {
        return a.name === b.name;
    },
    function (object) {
        return object.name;
    }
);
nameSet.get({name: "Kris"});
// {"name":"Kris","github":"kriskowal"}






//////////////////////////////////////////
//add
GenericCollection.prototype.filter = function (callback /*, thisp*/) {
    var thisp = arguments[1];
    var result = this.constructClone();
    this.reduce(function (undefined, value, key, object, depth) {
        if (callback.call(thisp, value, key, object, depth)) {
            result.add(value, key);
        }
    }, void 0);
    return result;
};



