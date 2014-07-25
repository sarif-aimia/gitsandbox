var emptyObject = {};

//example of an object literal
var stooge = {
    "firstName": "suf", //property names can have quotes around them
    lastName: "arif"   //property names don't have to have quotes around them if its a legal
};


//shows nested objects, within objects
var flight = {
    airline : "BA",
    number : 767,
    departure: {
        city: "Sydney"
    },
    arrival: {
        city: "London"
    }
}


//Object Retrieval

//property is accessed  using brackets (handy for dynammically accessing a property)
document.writeln("stooge firstname " + stooge["firstName"]);

//dot notation to access a property, this is preferred
document.writeln("stooge lastname " + stooge.lastName);

//non existant property returns undefined
document.writeln("stooge middlename " + stooge.middleName);


document.writeln("stooge prototype " + stooge.prototype);

document.writeln("stooge type of " + typeof stooge);


document.writeln("type of Object.create " + typeof Object.create);


var anotherStooge = Object.create(stooge);

document.writeln("anotherStooge firstname " + anotherStooge.firstName);




//objects





//functions

//this is a function literal, it is also an anonymous function
var add = function(a, b) {

  return a + b;
};


/*
there are four ways of invoking a function.

1) method invocation pattern
2) function invocation pattern


*/


/* The this parameter is passed to every function, what the this parameter
is bound to is dependant on the type of the method invocation
 */


//1) method invocation pattern






