//Nouns and verbs together
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

// Object literal notation
var me = {
    name: 'Gomer',
    age: 7
};

// Object constructor
var me1 = new Object();
me.name = "Gomer";
me.age = 7;

// Literal notation
var object1 = {
    name: "Juan",
    age: 25
};
var object2 = {
    weight: 150,
    height: 6
};
var object3 = {
    hours: 12,
    minutes: 30
};

// Heterogeneous arrays
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
var myArray = [1,true,'Pearland',myObj,3,4,5];

// Multidimensional arrays
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var newArray = [
    [1,2,3],
    [4,5],
    [6,7,8],
    [myObj]
];

// Editing an existing object
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: [1,2,3]

};
