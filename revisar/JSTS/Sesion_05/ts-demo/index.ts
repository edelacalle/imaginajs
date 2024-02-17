
// ? parametro opcional 
// ?? isnull

let miCadena:string     = '123';
let miNumero:number     =  parseFloat("1.34");
let miBooleano: boolean = (miNumero<0)?true:false;

type EcsCoord = {long:number, lat:number, gmt?:string};

type DiaSemanaLaboral = "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes"

let aDias : string[] = ["Lunes","Domingo","algo que no es semana", (2).toString()];

let miCoordGps: EcsCoord = {lat:2,long:1, gmt:"UTC"};


enum Fase {init,pending,closed,archived};

let oFase = Fase.init;

console.log("mi expediente esta en ", CalculaEstado(oFase));


// FIXME: Me falta la fase pendiente 
function CalculaEstado(miFase:Fase):any{

    switch (miFase) {
        case Fase.init: return "Estoy en fase Inicial";
        case Fase.pending: return "Estoy en fase Pendiente";
        case Fase.closed: return "Estoy en fase cerrada";
    }
    
}

/*

    
        case Fase.pending:
            break;
        case Fase.closed:
            break;
        

*/


var semana

miCadena = "hola"

let miCoordGps2: EcsCoord = {lat:2,long:1 };


enum DiaSemanaLaboral3 {Lunes , Martes};

let miDia3: DiaSemanaLaboral3 = DiaSemanaLaboral3.Lunes;

console.log("Mi día3 es", DiaSemanaLaboral3[miDia3]);

enum EnumDiaSemanaLaboral {Lunes, Martes, Miercoles, Jueves , Viernes }

let miDia2 = EnumDiaSemanaLaboral.Miercoles;
let valorMidia: number = miDia2;

if(valorMidia == EnumDiaSemanaLaboral.Lunes){

}



function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
if (getRandomInt(2) == 2){
    miDia3 = DiaSemanaLaboral3.Martes;
}
if (miDia3 == DiaSemanaLaboral3.Martes){
}
if (miDia3 == DiaSemanaLaboral3.Lunes){
    
}


/*

// let miDia: DiaSemanaLaboral = "Viernes";

enum EnumDiaSemanaLaboral {Lunes, Martes, Miercoles, Jueves , Viernes }

let miDia2 = EnumDiaSemanaLaboral.Miercoles;

console.log(miDia2, EnumDiaSemanaLaboral.Martes);
if(miDia2 == )
/*

if( miDia2 == EnumDiaSemanaLaboral[0]  ){

}

switch (miDia2) {
    case EnumDiaSemanaLaboral.Lunes:

        
        break;

    default:
        break;
}

*/


console.log("devolucion" , miCadena , typeof miCadena);