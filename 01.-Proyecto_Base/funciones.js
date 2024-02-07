/*
function nombre(){
    //console.log("argumentos de la funcion ", arguments)
    //console.log("el parametro 0 es ", params)
    //param = param ?? 123;
    //param = (param==null || param==undefined )?"soy nulo":"tengo dato" ;
    console.log("this es ", this)
    return {codigo:"uno"}
}

const nombre1 = ()=> { return {"codigo":"uno" }} 


(p)=>{return v }

const pepe = (param)=>{
    console.log("param es ", param )
    return 123;
}


//var pepe = nombre()

//console.log("pepe es ", pepe )

var test = nombre1();
console.log("test", test )
*/


function test1 ( param1 , param2 , cb ){
    var resultado = param1 * param2 ;
 
    if(cb){
        console.log("this es ", this)
        cb(resultado,2,3,4)
    }
    return 123 
    
}


//const anonima = (value)=>{console.log("me ha llegado ", value )};
const anonima2 = (value)=>{console.log("me ha llegado ", value )};


var aux = test1;

calculaNIF(param1 , letra);
calculaNif(objeto);
calculaNif()

var dev = test1(...params)



console.log("dev es ", dev)


aux(3,4,(value)=>{console.log("me ha llegado ", value )})