// Type Compatibility

interface mNamed {
    name: string;
}

class mPerson {
    name: string;
}

let p: mNamed;
// OK, because of structural typing
p = new mPerson();  // En C # o Java, no se permite porque mPerson no se define como una Implementacion de mNamed

let mx: mNamed;
// y's inferred type is { name: string; location: string; }
let my = { name: "Alice", location: "Seattle" };
mx = my;            // considera a mx compatible porque tiene el campo "name"
console.log(mx);    // asigna todo el objeto

// tambien en funciones
function greet(n: mNamed) {
    console.log("Hello, " + n.name);
}
greet(my); // OK

// Comparando dos funciones

let fx = (a: number) => 0;
let fy = (b: number, s: string) => 0;

fy = fx; // OK
//fx = fy; // Error

let items = [1, 2, 3];
// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));
// Should be OK!
items.forEach(item => console.log(item));

// Retorno de las funciones
let f_x = () => ({name: "Alice"});
let f_y = () => ({name: "Alice", location: "Seattle"}); // es mas restrictiva tiene que devolver los dos
f_x = f_y; // OK
//f_y = f_x; // Error, because x() lacks a location property

// Función Parámetro Bivariance

// Incompleto ....
