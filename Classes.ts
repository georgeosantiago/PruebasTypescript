// Classes

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

// Inheritance (Herencia)

// simple
class miAnimal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class miDog extends miAnimal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new miDog();
console.log('#######');
dog.bark();
dog.move(10);

// oto caso

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino"); // es de tipo Animal pero llama a Horse

console.log('#######');
sam.move();
tom.move(34);

// Public, private, and protected modifiers
// Public by default

class CAnimal {
    public name: string;
    private apellido: string;
    public constructor(theName: string, theApellido: string) { this.name = theName; this.apellido = theApellido;}
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// Understanding private
//new CAnimal("Cat", 'Gonzales').apellido; // Error: 'apellido' is private;


// Understanding protected
// Igual que private, pero los miembros declarados protected también se pueden acceder dentro de las clases derivadas
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log('#######');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

class miPerson {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; } // solo se puede instanciar desde una clase derivada
}

// Readonly modifier

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly

class miOctopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {  // en parametros
    }
}

// Accessors
// getters / setters

class CEmployee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = 'Sr. ' + newName;
    }
}

console.log('#######');
let employee = new CEmployee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

// Static Properties
// visibles en la clase en lugar de en las instancias

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    dameorigen() {
        return Grid.origin;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale
console.log('#######');
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.dameorigen());


// Abstract Classes
// clases base de las cuales pueden derivarse otras clases

abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

// Advanced Techniques
// Constructor functions

//  Una declaración de clase crea dos cosas: un tipo que representa instancias de la clase y una función de constructor.
// grid2.origin= {x: 1, y: 1}; Error! es static
let Gridmk: typeof Grid = Grid;
Gridmk.origin= {x: 1, y: 1};    // ahora puedo acceder a static
let grid3: Grid = new Gridmk(1.0);
console.log(grid3.dameorigen());

// Using a class as an interface

// Debido a que las clases crean tipos, puede usarlos en los mismos lugares donde podría usar interfaces.
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};