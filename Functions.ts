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

// lastNamepor defecto
function buildName_v2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

function buildName_v3(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
// let result1 = buildName_v3("Bob");                  // error, too few parameters
let result4 = buildName_v3(undefined, "Adams");     // okay and returns "Will Adams"

// Rest Parameters

function buildName_rest(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName_rest("Joseph", "Samuel", "Lucas", "MacKinzie");

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName_rest;

/// this

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // return function() { Error: this es undefined
        // Las funciones de flecha (ECMAScript 6) capturan this dónde se crea la función en lugar de dónde se invoca
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('######');
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// this parameters

function fun_a(this: void) {
    // make sure `this` is unusable in this standalone function
}

// this con interface para definir el tipo
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let odeck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let vcardPicker = odeck.createCardPicker();
let vpickedCard = vcardPicker();

console.log('######');
console.log("card: " + vpickedCard.card + " of " + vpickedCard.suit);

// this parameters in callbacks

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}


class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}
let h = new Handler();
//uiElement.addClickListener(h.onClickGood);  Ok

// usar funcio flecha
class Handler2 {
    info: string;
    onClickGood = (e: Event) => { this.info = e.type }
}

// Overloads

function  funalgo(x: {v1: string, v2:number; }): number;
function  funalgo(x: number): {v1: string, v2: number; };
function  funalgo(x: any): any {
    if (typeof x == "object") {
        return 10;
    }
    else if (typeof x == "number") {
        return {v1:'hola', v2: 5};
    }
}
console.log('######');
console.log( funalgo({v1:'hola', v2: 5}) );
console.log( funalgo(5) );

