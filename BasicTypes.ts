// Basic Types

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

let sentence_idem: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

// Array
let list: number[] = [1, 2, 3];

let list_idem: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[0] = "world"; // OK, 'string' can be assigned to 'string | number'


console.log(x[0].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'

// Enum

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

enum Color_b {Red = 1, Green, Blue}
let cb: Color_b = Color_b.Green;
console.log(cb);

enum Color_c {Red = 1, Green = 2, Blue = 4}
let cc: Color_c = Color_c.Green;
console.log(cc);

let colorName: string = Color[2];
console.log(colorName);

// Any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);

let notSure_b: any = 4;
notSure_b.ifItExists; // okay, ifItExists might exist at runtime
notSure_b.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list_b: any[] = [1, true, "free"];
list_b[1] = 100;
console.log(list_b[1]);

// Void

function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

let unusable: void = undefined; // a un tipo void solo se puede asignar undefined y null

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

// Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
// cualquier cosa que no sea number , string , boolean , symbol , null o undefined .

let pp= Object.create({ prop: 'changos' });
console.log(pp.prop);

// Type assertions

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log('el largo es: '+ strLength);

let strLength_idem: number = (someValue as string).length;
console.log('el largo es: '+ strLength_idem);

