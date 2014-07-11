document.writeln('Hello, world!');

var emptyObject = {};

//example of an object literal
var stooge = {
    "firstName": "suf", //property names can have quotes around them
    lastName: "arif"   //property names don't have to have quotes around them if its a legal
};

document.writeln(stooge["firstName"]);
document.writeln(stooge.lastName);
document.writeln(stooge.middleName);//dot notation to access a objects property
