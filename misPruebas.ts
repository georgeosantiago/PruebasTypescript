/* 
    misPruebas.ts
*/
console.log('Inicio de pruebas ...');

class CPerson {
    protected name: string;
    private _fullname: string;

    constructor(name: string) {        
        this.name = name; 
    }
    public print_name() {
        console.log('->' + this.name);
    }
    public print_fullname() {
        console.log('->' + this._fullname);
    }

    get fullname():string {
        return this._fullname;
    }
    set fullname(mifullname: string) {
        this._fullname= mifullname;
    }
}

class ClEmployee extends CPerson {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public print_name() {
        console.log(`->${this.name} ->${this.department}`);
    }    
}

let mi_person = new CPerson("Bob");
mi_person.print_name();
mi_person.fullname= "Boby Fisher";
mi_person.print_fullname();

let mi_employee = new ClEmployee("Bobi","Desarrollo");
mi_employee.print_name();