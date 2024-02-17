
// enum DiaSemana  { Lunes, Martes,  Miercoles,  Jueves,  Viernes,  Sabado,  Domingo}
enum Operadores { Suma , Resta , Multiplicacion , Division } 
enum OperVarios { Media , Max , Min  }

interface CalcInterface {
    version():string
    opera(num1:number,num2:number,op:Operadores):number
    operaVarios(aDatos:number[]  ,op:OperVarios):number
}
 
class Calculadora implements CalcInterface {
    version():string{
       return "Calculadora 1.2";
    }

    operaVarios( aDatos:number[]  ,op:OperVarios):number{
        let nRet = 0;
        for( let i = 0 ; i<aDatos.length; i++){
            nRet += aDatos[i]
        } 
        if(op == OperVarios.Media){
            return nRet / aDatos.length;
        }else{
            return nRet;
        }
        
    }

    opera(num1:number,num2:number,op:Operadores):number{
        let nRet = undefined;
        switch (op) {
            case Operadores.Suma: 
                nRet =  num1 + num2;
                break
            case Operadores.Resta: 
                nRet =  num1 - num2;
                break
            case Operadores.Multiplicacion: 
                nRet =  num1 * num2;
                break
            case Operadores.Division: 
                nRet =  num1 - num2;
                break;
            default:
                nRet = 0;
        }
        return nRet;
    }
}


const oCalc = new Calculadora();

console.log(oCalc.version())
//console.log(oCalc.suma(1,2))
const val1 = oCalc.opera(1,2,Operadores.Suma);
const val2 = oCalc.opera(1,2,Operadores.Resta);
const val3 = oCalc.operaVarios( [1,2,3] ,OperVarios.Media);
console.log("val1 es ", val1 )
console.log("val2 es ", val2 )
console.log("val1 es ", val3 )




