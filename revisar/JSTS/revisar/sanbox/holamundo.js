
"use strict"; 

var v1 = 123 ; 


var v2 = 'valor comilla simple';
var v3 = `tambien ${v1}`;

let l1 = "valor global";

const cte1 = "EL VALOR DEL API DE CLOUDFARE";


cte1 = 123;



function pepe(){
    var v1 = "este dato solo es para la funcion pepe";
    let l1 = 123;
    var otra = window.v1.toLowerCase();

    //console.log("v1 vale", v1)
}


console.log("valor de cte ", cte1)

console.log("v1 vale" , v1 )
console.log("v2 vale" , v2 )
console.log("v3 vale" , v3 )

pepe();
console.log("v1 sigue valiendo ", v1 )