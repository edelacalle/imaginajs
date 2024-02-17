export enum OperadoresDupla { Suma , Resta , Multiplicacion , Division }
export enum OperadoresTupla { Media, Maximo , Minimo , Suma}


const eventBus = (window as any).eventBus;

interface CalculadoraInterface {
    version():string; // devuelve la version actual de la calculadora
    operaDupla(num1:number,num2:number,op:OperadoresDupla):number |  boolean;
    operaTupla(aNum:number[],op:OperadoresTupla):number | boolean;
}

export class Calculadora implements CalculadoraInterface {
    nOper: number = 1;
    auxNum1:string = "";
    auxNum2:string = "";
    nRes:number | boolean = undefined;
    op: OperadoresDupla;

    
    constructor(){
        eventBus.subscribe('calc.key', ( key:string) =>this.setKey(key)) 
    }

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

    setKey(tecla:string){
        switch (tecla) {
            case '0':
            case '1':
            case '2':                
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':                
            case '9':
                if(this.nOper == 1 ){
                    this.auxNum1 += tecla;
                    eventBus.publish('calc.result',this.auxNum1)    
                }else{
                    this.auxNum2 += tecla;
                    eventBus.publish('calc.result',this.auxNum2)    
                }
                break;
            case '.':
                // TODO: Si es punto , variable float 
                alert("Hay que desarrollar ")
                break;

            case '+':
                // INFO: ¿ Podria ser nOper 1 o 2 , no ++
                this.nOper = 2 ;
                this.op = OperadoresDupla.Suma;
                break;
            case '-':
                this.nOper = 2 ;
                this.op = OperadoresDupla.Resta;
                break;
            case '=':
                    // Cuando active el . sustuir parseInt por parseFloat 
                    this.nRes = this.operaDupla(parseInt(this.auxNum1), parseInt(this.auxNum2), this.op)
                    this.auxNum1=this.nRes.toString();
                    this.auxNum2="";
                    this.nOper = 1;
                    eventBus.publish('calc.result',this.nRes)        
                    break;                
            case 'c':
                if(this.nOper == 1 ){
                    this.auxNum1 = "";
                    eventBus.publish('calc.result',this.auxNum1)    
                }else{
                    this.auxNum2 = "";
                    eventBus.publish('calc.result',this.auxNum2)    
                }
                break;
            default:
                break;
        }
        
        
    }



}




