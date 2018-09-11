// Type Inference

// Lo esencial

let nx = 3; // number

// El mejor tipo común

let numx = [0, 1, null];  // decide que el mejor tipo comun es number[]

// let zoo = [new Rhino(), new Elephant(), new Snake()];            // no asume un tipo
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];  // fijo un tipo

// Tipo contextual

window.onchange = function(cnEvent) {
     // console.log(cnEvent.button);  //<- Error saca el tipo de cnEvent del contexto window.onchange
};

window.onchange = function(cnEvent:any) {
     console.log(cnEvent.button);  //<- Sin error
};