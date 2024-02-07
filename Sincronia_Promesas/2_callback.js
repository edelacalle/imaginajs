var miCb = (e)=>console.log("vuelvo del callback" , e)

function funcionDeLargaDuracion(cb) {
    let inicio = Date.now();
    while (Date.now() - inicio < 5000) {
        // Proceso masivo
        let aux =  Date.now() - inicio;
        if(( aux % 1000 ) == 0 ){
            cb( {msg:'Procesando '+aux , val:aux }) ;
            
        }
    }
    return "Hola";
}

console.log('Iniciando...');

//let resultado = funcionDeLargaDuracion(miCb);
funcionDeLargaDuracion(function micb(value){
    console.log("vuelvo con ", value )

})

//console.log(resultado);

console.log('...Finalizando');