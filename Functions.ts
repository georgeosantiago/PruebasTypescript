// Functions

// Named function
function add(x:any, y:any) {
    return x + y;
}

// Anonymous function
let myAdd = function(x:any, y:any) { return x + y; };

// capture  (variables fuera de la funcion)
let z = 100;
function addToZ(x:number, y:number):number {
    return x + y + z;
}

//Escribir el tipo de función
let myAdd_idem1: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

//en el typo hago mas legible
let myAdd_idem2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };    

// nferring the types

// myAdd has the full function type
let myAdd_a = function(x: number, y: number): number { return  x + y; };

// The parameters 'x' and 'y' have the type number
let myAdd_b: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

// Optional and Default Parameters

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

function buildName_idem(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result_1 = buildName_idem("Bob");                  // works correctly now
//let result_2 = buildName_idem("Bob", "Adams", "Sr.");  // error, too many parameters
let result_3 = buildName_idem("Bob", "Adams");         // ah, just right

