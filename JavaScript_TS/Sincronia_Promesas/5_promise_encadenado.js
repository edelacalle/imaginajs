function DptoConta(){
    return new Promise(function(resolve,reject){
        let inicio = Date.now();
        while (Date.now() - inicio < 5000) {};
        resolve({datoConta:123})
        // (param1 > 10 ) ? resolve("Ok: "+param1): reject('Err:'+param1)
    })
} 

function DptoRRHH(param1){
    return new Promise(function(resolve,reject){
        let inicio = Date.now();
        while (Date.now() - inicio < 5000) {};
        resolve({datoRRHH: param1 * 2 })
        //(param1 > 10 ) ? resolve("Ok: "+param1): reject('Err:'+param1)
    })
} 

function RecopilaDatos(){
    return new Promise(function(resolve,reject){
        DptoConta().then( (dataC) => {
            console.log("ya tengo el datoConta ", dataC );
            DptoRRHH(dataC.datoConta).then( data=>{
                console.log("vuelvo de rrhh ", data )
                resolve(data)
            })        
        })        
    })
} 

console.log("inicio")

RecopilaDatos()
.then((data)=>console.log("ok ",data))
.catch((data)=>console.log("err ",data))


console.log("fin")