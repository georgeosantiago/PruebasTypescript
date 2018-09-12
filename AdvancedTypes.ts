// Advanced Types

// Intersection Types

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class aPerson {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log('--');
    }
}
var jim = extend(new aPerson("Jim"), new ConsoleLogger());
var an = jim.name;
console.log(an);
jim.log();

// Union Types

function padLeft(value: string, padding: string | number) {
    
}

//Si tenemos un valor que tiene un tipo de unión, 
//solo podemos acceder a los miembros que son comunes a todos los tipos en la unión.

interface uBird {
    fly():void;
    layEggs():void;
}

interface uFish {
    swim():void;
    layEggs():void;
}

class CuBird implements uBird {
    fly():void {
    }
    layEggs():void {
    }
    constructor() { }
}

class CuFish implements uFish {
    swim():void {
    }
    layEggs():void {
    }
    constructor() { }
}

function getSmallPet(): uFish | uBird {
    let ss:uFish | uBird;
    ss= new CuFish();
    return ss;
}

let pet = getSmallPet();
pet.layEggs();   // okay
//pet.swim();    // errors

// Type Guards and Differentiating Types

if ((<uFish>pet).swim) {
    (<uFish>pet).swim();
}
else {
    (<uBird>pet).fly();
}

//Protectores tipo definidos por el usuario

function isFish(pet: uFish | uBird): pet is uFish {
    return (<uFish>pet).swim !== undefined;
}

// typeof tipo guardias

function isNumber(x: any): x is number {
    return typeof x === "number";
}

// "typename"debe ser "number", "string", "boolean", o "symbol"
function tpadLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof tipo guardias

interface Padder {
    layEggs(): void
}

let padder: Padder;

if (Math.random() < 0.5) {
    padder = new CuFish();
} else {
    padder = new CuBird();
}

if (padder instanceof CuFish) {
    padder; // layEggs de CuFish
}

if (padder instanceof CuBird) {
    padder; // layEggs de CuBird
}

// Nullable types

// null y undefined
console.log('######');
let s = "foo";
s = null;       // segun la documentacion no se puede
s = undefined;  // segun la documentacion no se puede

// Parámetros y propiedades opcionales
// --strictNullChecks agrega |undefined

function ff(x: number, y?: number) {
    return x + (y || 0);
}
ff(1, 2);
ff(1);
ff(1, undefined);
ff(1, null);    // segun la documentacion no se puede

