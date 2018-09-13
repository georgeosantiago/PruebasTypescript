// Modules

//  ECMAScript 2015 module X { es equivalente a namespace X {

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;


class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };

/*
export * from "./StringValidator"; // exports interface 'StringValidator'
export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator'
*/

// Importar

// import { ZipCodeValidator } from "./ZipCodeValidator";

// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";

// import * as validator from "./ZipCodeValidator";

export default class mZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && mZipCodeValidator.numberRegexp.test(s);
    }
}

/*
import validator from "./ZipCodeValidator";
let myValidator = new validator();

import zip = require("./ZipCodeValidator");
*/