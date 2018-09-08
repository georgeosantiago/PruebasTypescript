function migreeter(person: string) {
    return "Hello, " + person;
}

let miuser = "Jane User";

document.body.innerHTML = migreeter(miuser);

console.log(migreeter(miuser));
