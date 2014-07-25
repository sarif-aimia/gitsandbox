var emptyObject = {};


//Objects

//Object Literal
var stooge = {
    "firstName": "suf", //property names can have quotes around them
    lastName: "arif"   //property names don't have to have quotes around them if its a legal identifier
};


//Nested objects, within objects
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

//property is accessed  using brackets (handy for dynammically/reflectively accessing a property)
document.writeln("stooge firstname - " + stooge["firstName"]);

//dot notation to access a property, this is preferred
document.writeln("stooge lastname - " + stooge.lastName);

//non existant property returns undefined
document.writeln("stooge middlename - " + stooge.middleName);

//stooge typeof is an object
document.writeln("stooge type of - " + typeof stooge);

document.writeln("flight number should be of type number - " + typeof flight.number)

//it seems there is already a create function that has been added to the object
document.writeln("type of Object.create " + typeof Object.create);

//sets stooge as the prototype of anotherStooge
var anotherStooge = Object.create(stooge);

//gets the firstName from stooge prototype
document.writeln("anotherStooge firstname " + anotherStooge.firstName);


//hasOwnProperty method lets you check whether the property is directly on object or prototype
if (anotherStooge.hasOwnProperty("firstName")) {
  document.writeln("anotherStooge has property name firstName");
} else {
    document.writeln("anotherStooge does not have own property firstName")
}

for (propName in stooge) {
    document.writeln("Property Name = " + propName + ", Property Value  = " + stooge[propName]);
}


//Functions

//this is a function literal, function name is optional aka anonymous function
var add = function(a, b) {

    //arguments is a bonus parameter that is available to all functions, array of values
    for (i=0; i < arguments.length; i++) {
        document.writeln("argument value is - " + arguments[i]);
    }

  return a + b;
};

var result = add(3,4,5,6);


/*
there are four ways of invoking a function.

1) method invocation pattern
2) function invocation pattern
3) constructor invocation pattern



In addition to arguments every function also receives a this parameter, the patterns differ
in how this is initialised

*/

//1) method invocation pattern,

var myObject = {
    value : 0,
    //if a function is a property of an object then it is called a method
    increment : function(inc) {
        //this in increment is bound to myObject(as you would expect)
        this.value += typeof inc === 'number' ? inc : 1;
    },
    double : function() {
        var that = this;

        var helper = function() {
            //according to crockford this is a mistake in the javascript language and this in helper is not bound to
            // the double this, therefore we can use a trick to bind it to a variable called that.


            that.value = that.value * 2;
        }

        helper();
    }
};




document.writeln("value original - " + myObject.value);
myObject.increment(3);
document.writeln("value incremented by 3 -" + myObject.value);
myObject.double();
document.writeln("value doubled " + myObject.value);


//1) method invocation pattern






