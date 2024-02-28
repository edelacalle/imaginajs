function ProcesoDpto1(cb) {
    let inicio = Date.now();
    while (Date.now() - inicio < 5000) {};
    cb(123);
}

function ProcesoDpto2(cb) {
    let inicio = Date.now();
    while (Date.now() - inicio < 10000) {};
    cb(124);
}


console.log('Iniciando...');


ProcesoDpto1((vuelve)=>{
    console.log("termino Proceso1 con ", vuelve )
    ProcesoDpto2((vuelve2)=>{
        console.log("termino el proceso 2 con ", vuelve2 )
        console.log("y opero con valor 1 y valor 2 ", vuelve , vuelve2 , vuelve+vuelve2  )
    })
})


console.log('...Finalizando');