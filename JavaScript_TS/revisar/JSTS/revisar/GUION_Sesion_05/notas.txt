
/* suma , resta , multiplica , divide */ 

type Sexo = 'Hombre' | 'Mujer' | 'Otros';

type Operacion = 'suma' | 'resta' | 'multiplica' | 'divide';
type myReturn = string | number ;


function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Clase: ', target.constructor.prototype);
    console.log('Método: ', propertyKey);
    console.log('Property Descriptor: ', descriptor);

    descriptor.value = function (...args: any[]) {
        console.log('Argumentos de la funcion', args);
    }
    return descriptor;
}
    

type Cliente = {
    "nombre": string,
    "apellido"?:string,
    "edad": number,
    "sexo": Sexo
}


var aux:Cliente = {
    "nombre":"Antonio",
    "apellido":"Lopez",
    "edad":78,
    "sexo":"Hombre"
}


interface CalcInterface {
   opera(a:number, b:number,op:Operacion):number;
   suma(a:number, b:number):number;
   resta(a:number, b:number):number;
   multiplica(a:number, b:number):number;
   divide(a:number, b:number):number;

   prueba(a:number, b:number) :myReturn;
   prueba2(cliente:Cliente):string
   

}


class Calculadora implements CalcInterface {

    constructor(){};
    opera(a:number, b:number,op:Operacion):number{
        let nRet:number  = -1;
        switch (op) {
            case 'suma':
                nRet = this.suma(a,b);
                break;
            case 'resta':
                    nRet = this.resta(a,b)
                    break;
            case 'multiplica':
                nRet = this.multiplica(a,b)
                break;
            case 'divide':
                nRet = this.divide(a,b)
                break;

            default:

                break;
        }
        return nRet; 
    }

    
    suma(a: number, b: number): number {
        return a + b;
    }
    resta(a: number, b: number): number {
        return a - b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
    multiplica(a: number, b: number): number {
        return a * b;

    }

    @log
    prueba(a: number, b: number): myReturn   {
        // Si el maldito autditor 
        // console
        if(a > 10  && b > 10 ){
            return "El valor es muy alto"
        }else{
            return a + b ;
        }
    }

    prueba2(cliente:Cliente):string{
        if(cliente.nombre=="Antonio"){
            return "Es Antonio"
        }else{

            return "No es Antonio" ;
        }
        

    }

}

let oCalc:Calculadora = new Calculadora();

console.log("prueba de suma ", oCalc.opera(5,4,'suma') );
console.log("prueba de divide ", oCalc.opera(5,4,'divide') );
console.log("prueba con error", oCalc.opera(5,0,'divide') );
console.log("prueba menor", oCalc.prueba(5,0) );
console.log("prueba mayor", oCalc.prueba(25,15) );
console.log("prueba Antonio", oCalc.prueba2(aux) );
console.log("prueba NO ", oCalc.prueba2({ nombre:"luis", edad:88 , sexo:"Hombre"}) );



