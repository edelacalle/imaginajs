function Dpto1(param1){
    return new Promise(function(resolve,reject){
        let inicio = Date.now();
        while (Date.now() - inicio < 5000) {};
        /*
        if(param1 >10){
            resolve("Procesado el dato "+param1)
        }else{
            reject("Error en el procesamiento"+param1)
        }
        */
        (param1 > 10 ) ? resolve("Ok: "+param1): reject('Err:'+param1)
    })
} 


/*
const Dpto1 = ( param1 ) => new Promise( function(resolve, reject){
    
    let inicio = Date.now();
    while (Date.now() - inicio < 5000) {};
    if(param1 >10){
        resolve("Procesado el dato 125"+param1)
    }else{
        reject("Error en el procesamiento"+param1)
    }
        
});
*/
var data1 = 0 ;
var data2 = 0;


console.log("inicio");

Dpto1(5)
.then((data)=>data1 = data )
.catch((data)=>console.log("err ",data))


Dpto1(15)
.then((data)=>console.log("ok ",data))
.catch((data)=>console.log("err ",data))


console.log("fin")

async function necesitodatos(){
    let dpto1 = await Dpto1(5);
    let dpto2 = await Dpto2(15);
    console.log("tengo dpto1 ", dpto1); 
    console.log("tengo dpto2 ", dpto2); 
    console.log("opero")
    console.log("fin")

}



