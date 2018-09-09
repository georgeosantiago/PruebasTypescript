// Variable Declarations

// var declarations

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
console.log( 'retorna: ' + g() ); // returns '11'

/*
for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log('-'+i); }, 100 * i);
}

for (var j = 0; j < 3; j++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(j) {
        setTimeout(function() { console.log('+'+j); }, 100 * j);
    })(j);
}*/

// let declarations

let hello = "Hello!";
/*
for (let i = 0; i < 3 ; i++) {
    setTimeout(function() { console.log('#'+i); }, 100 * i);
}*/

// const declarations

const numLivesForCat = 9;

const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

/* Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// Destructuring

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

[first, second] = [second, first]; //swap
console.log(first); // outputs 2
console.log(second); // outputs 1

console.log('##########'); 
function fun([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
fun([6, 7]);

console.log('##########'); 
let [one, ...rest] = [1, 2, 3, 4];
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

console.log('##########'); 
let [first_] = [1, 2, 3, 4];
console.log(first_); // outputs 1


// Object destructuring

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log('##########'); 
console.log(a); 
console.log(b); 

({ a, b } = { a: "baz", b: 101 });
console.log(a); 
console.log(b); 

let { a:aa, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log('##########'); 
console.log(aa); 
console.log(total);

// Property renaming

let { a: newName1, b: newName2 } = o;
console.log('##########'); 
console.log(newName1); 
console.log(newName2);

let { a:a_string, b:b_number }: { a: string, b: number } = o;
console.log('##########'); 
console.log(a_string); 
console.log(b_number);

// Default values

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(a); 
    console.log(b); 
}
console.log('##########'); 
keepWholeObject({a:'hola', b:10});
keepWholeObject({a:'hola'});

// Function declarations

type C = { a: string, b?: number }
function mifun({ a, b=99 }: C): void {
    console.log(a); 
    console.log(b);     
}
console.log('##########'); 
mifun({a:'changos', b:11});
mifun({a:'changos'});

function ofun({ a="", b=0 } = {}): void {
    console.log(a); 
    console.log(b);     
}
console.log('##########'); 
ofun();
ofun({a:'yy',b:4});

function xfun({ a, b = 0 } = { a: "--" }): void {
    console.log(a); 
    console.log(b);         
}
console.log('##########'); 
xfun({ a: "yes" }); // ok, default b = 0
xfun(); // ok, default to { a: "--" }, which then defaults b = 0
// xfun({}); // error, 'a' is required if you supply an argument

// Spread

let afirst = [1, 2];
let asecond = [3, 4];
let bothPlus = [0, ...afirst, ...asecond, 5];
console.log(bothPlus); 

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search); //cambio el valor de food, a default le aplicamos food

let search_b = { food: "rich", ...defaults };
console.log(search_b); //a food le aplicamos default


// La propagación de objetos solo incluye las propiedades enumerables
// y no permite extensiones de parámetros de tipo a partir de funciones genéricas
class Cla {
    p = 12;
    m() {
    }
  }
  let vc = new Cla();
  let clonado = { ...vc };
  clonado.p; // ok
  // clonado.m(); // error!