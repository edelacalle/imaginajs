function funcionDeLargaDuracion() {
    let inicio = Date.now();
    while (Date.now() - inicio < 5000) {
        // Estoy procesando las tareas 
    }
    return "el resultado de la operacion masiva";
}

console.log('Iniciando...');

let resultado = funcionDeLargaDuracion();
console.log(resultado);

console.log('...Finalizando');