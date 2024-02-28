export enum OperadoresDupla { Suma , Resta , Multiplicacion , Division }
export enum OperadoresTupla { Media, Maximo , Minimo , Suma}

interface CalculadoraInterface {
    version():string; // devuelve la version actual de la calculadora
    operaDupla(num1:number,num2:number,op:OperadoresDupla):number |  boolean;
    operaTupla(aNum:number[],op:OperadoresTupla):number | boolean;
}

export class Calculadora implements CalculadoraInterface {
    version():string {return "Calculadora Version 1.0";}

    operaDupla(num1:number,num2:number,op:OperadoresDupla):number | boolean {
        let nRet:number | boolean  = false   ;
        switch (op) {
            case OperadoresDupla.Suma:
                nRet = num1 + num2 ;
                break;
            case OperadoresDupla.Resta:                
                nRet = num1 - num2 ;
                break;
            case OperadoresDupla.Multiplicacion:                
                nRet = num1 * num2 ;
                break;
            case OperadoresDupla.Division:                
                nRet = (num2 == 0) ? false : num1 / num2 ;
                break;
            default:
                break;
        }
        
        return nRet ;
    }
    
    operaTupla( aNum:number[] , op:OperadoresTupla ):number | boolean{
        let nRet = 0 ; 
        if(aNum.length <1 ) return false ; 
        switch ( op) {
            case OperadoresTupla.Minimo:
                nRet = Math.min(...aNum);
                break;
            case OperadoresTupla.Media:
                nRet = (aNum.reduce((total, num) => total + num, 0)) / aNum.length;
                break;
            case OperadoresTupla.Suma:
                nRet = (aNum.reduce((total, num) => total + num, 0));
                break;
                    
            case OperadoresTupla.Maximo:
                nRet = Math.max(...aNum);
                break;
        }
        return nRet 
    }


}




