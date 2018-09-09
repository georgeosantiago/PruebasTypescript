// Interfaces

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


// Our First Interface

//ahora verifico la entrada con interfaces
interface LabelledValue {
    label: string;
}

function printLabel_b(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
printLabel_b(myObj);

// Optional Properties

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mico = {width: 3, gol:'algo'};

console.log(createSquare({color: "black"})); //solo puedo poner parametros definidos en la interface
console.log(createSquare({color: "black", width: 3}));
console.log(createSquare(mico));

// Readonly properties

interface rPoint {
    readonly x: number;
    readonly y: number;
}

let p1: rPoint = { x: 10, y: 20 };
// p1.x = 5; // error!

// las clases ReadonlyArray<T> y Array<T>
let ar: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = ar;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!

// ar = ro; // error!
ar = ro as number[]; // se puede anular con una asercion. 
ar = <number[]>ro; //idem

// readonly vs const
// Las variables usan const mientras que las propiedades usan readonly

// Excess Property Checks

interface miSquareConfig {
    color?: string;
    width?: number;
}

function micreateSquare(config: miSquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

console.log( '############' );
let micol = {colour:'red', width: 3};
console.log( micreateSquare(micol) ); // Ok
//console.log( micreateSquare({colour:'red', width: 3}) ); Error: control de propiedad en exceso
console.log( micreateSquare(<miSquareConfig>{colour:'red', width: 3}) ); // Ok con asercion

// ok con propiedad generica
interface otSquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// Tipos de funciones

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source_etc: string, subString) {    // los nombres pueden no coincidir  ...
    let result = source_etc.search(subString);          // los tipos pueden no estar declarados ...
    return result > -1;
}
console.log( '############' );
console.log(mySearch('pepito','pi'));

// Indexable Types

interface StringArray {
    [index: number]: string; // Esta firma de índice indica que cuando a StringArrayestá indexado con a number, devolverá a string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    //name: string;    // error, the type of 'name' is not a subtype of the indexer
}

//Class Types

// Implementando una interfaz
// Uno de los usos más comunes de las interfaces en lenguajes como C # y Java, el de hacer cumplir 
// explícitamente que una clase cumpla un contrato particular, también es posible en TypeScript.
interface miClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
}

class Clock implements miClockInterface {
    currentTime: Date;
    setTime(d: Date):void {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// implementar constructores
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// Extending Interfaces

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// Hybrid Types

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let gc = getCounter();
gc(10);
gc.reset();
gc.interval = 5.0;

//  Interfaces Extending Classes

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.  -- Image deberia heredar de Control
/* class Image implements SelectableControl {    
    select() { }
} */
