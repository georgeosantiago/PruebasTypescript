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

// Escriba guardias y escriba aserciones

function fa(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
// con operadores terser
function fb(sn: string | null): string {
    return sn || "default";
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + '.  the ' + epithet; // ok ver:   name!.
    }
    name = name || "Bob";
    return postfix("great");
  }

  console.log(fixed(null));

  // Type Aliases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

// generico
type Container<T> = { value: T };

// autoreferenciado
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// cosas locas
type LinkedList<T> = T & { next: LinkedList<T> };
interface Person {
    name: string;
}
/*
var people: LinkedList<Person>;
var s1 = people.name;
var s2 = people.next;
var s1 = people.next.next.next.name; */

// type Yikes = Array<Yikes>; // error

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias; //alias de tipo no se pueden extender
declare function interfaced(arg: Interface): Interface;

// String Literal Types

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// Los tipos literales de cadena se pueden usar de la misma manera para distinguir sobrecargas:
/* 
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
} */

// Numeric Literal Types

function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 1;
}

// Enum Member Types

//Discriminated Unions

interface Square {
    kind: "square"; // prop discriminante o etiqueta
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type tShape = Square | Rectangle | Circle;

function area(s: tShape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

//Comprobación de exhaustividad
// El segundo método usa el nevertipo que el compilador usa para verificar la exhaustividad:
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function areab(s: tShape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}

// Polymorphic this types

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let v = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
console.log('######');
console.log(v);

// Index types

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }
  
  interface Person {
      name: string;
      age: number;
  }
  let person: Person = {
      name: 'Jarid',
      age: 35
  };
  let strings: string[] = pluck(person, ['name']); // ok, string[]


function getProperty_i<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
let name_i: string = getProperty_i(person, 'name');

// Index types and string index signatures

interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number

// Tipos mapeados

interface PersonPartial {
    name?: string;
    age?: number;
}
interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

type ReadonlyT<T> = {
    readonly [P in keyof T]: T[P];
}
type PartialT<T> = {
    [P in keyof T]?: T[P];
}

type PersonPartial_v = Partial<Person>;
type ReadonlyPerson_v = Readonly<Person>;


