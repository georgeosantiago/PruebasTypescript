// Generics

// aqui se pierde el tipo de la variable dentro de la funcion
function identity(arg: any): any {
    return arg;
}

// Usando una variable de tipo, conservamos el tipo suministrado
function identity_a<T>(arg: T): T {
    return arg;
}

// uso
let output = identity_a<string>("myString");  // type of output will be 'string'

let output2 = identity("myString");  // type of output will be 'string'

// Working with Generic Type Variables

function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity_b<T>(arg: T[]): T[] {
    console.log(arg.length);  // OK Array has a .length
    return arg;
}

function loggingIdentity_c<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length
    return arg;
}

// Generic Types

function identity_xx<T>(arg: T): T {
    return arg;
}

let myIdentity_xx: <U>(arg: U) => U = identity_xx; // se puede cambiar los nombres

let myIdentity_xy: {<T>(arg: T): T} = identity_xx; // tipo de un objeto

// Interfaces genericas

interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity_z1<T>(arg: T): T {
    return arg;
}
let myIdentity_z1: GenericIdentityFn = identity_z1;


interface GenericIdentityA<T> {
    (arg: T): T;
}
function identityA<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityA<number> = identityA; // para number

// Generic Classes

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


// Generic Constraints

interface Lengthwise {
    length: number;
}
function loggingIdentity_cons<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property
    return arg;
}

// loggingIdentity_cons(3);  Error

console.log('######');
loggingIdentity_cons({length: 10, value: 3});

// Using Type Parameters in Generic Constraints

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let xx = { a: 1, b: 2, c: 3, d: 4 };

getProperty(xx, "a"); // okay
// getProperty(xx, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generics

function create<T>(c: {new(): T; }): T {
    return new c();
}


// mas complejo
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class CCAnimal {
    numLegs: number;
}

class Bee extends CCAnimal {
    keeper: BeeKeeper;
}

class Lion extends CCAnimal {
    keeper: ZooKeeper;
}

function createInstance<A extends CCAnimal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
