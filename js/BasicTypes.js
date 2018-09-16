// Basic Types
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence_idem = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
// Array
var list = [1, 2, 3];
var list_idem = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[3].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color_b;
(function (Color_b) {
    Color_b[Color_b["Red"] = 1] = "Red";
    Color_b[Color_b["Green"] = 2] = "Green";
    Color_b[Color_b["Blue"] = 3] = "Blue";
})(Color_b || (Color_b = {}));
var cb = Color_b.Green;
console.log(cb);
var Color_c;
(function (Color_c) {
    Color_c[Color_c["Red"] = 1] = "Red";
    Color_c[Color_c["Green"] = 2] = "Green";
    Color_c[Color_c["Blue"] = 4] = "Blue";
})(Color_c || (Color_c = {}));
var cc = Color_c.Green;
console.log(cc);
var colorName = Color[2];
console.log(colorName);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);
var notSure_b = 4;
notSure_b.ifItExists; // okay, ifItExists might exist at runtime
notSure_b.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var list_b = [1, true, "free"];
list_b[1] = 100;
console.log(list_b[1]);
// Void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var unusable = undefined; // a un tipo void solo se puede asignar undefined y null
// Null and Undefined
var u = undefined;
var n = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
// Object
// cualquier cosa que no sea number , string , boolean , symbol , null o undefined .
var pp = Object.create({ prop: 'changos' });
console.log(pp.prop);
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log('el largo es: ' + strLength);
var strLength_idem = someValue.length;
console.log('el largo es: ' + strLength_idem);
//# sourceMappingURL=BasicTypes.js.map