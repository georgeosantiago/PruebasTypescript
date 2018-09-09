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