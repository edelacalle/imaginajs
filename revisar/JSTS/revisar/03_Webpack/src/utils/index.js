// import fs from 'node:fs';


// INFO: Funcion que captura los mensajes de toda la app
// TODO: control de parametros ¿ Y si me mandan mas parametros ? 
// FIXME: Cuidado si msg es codigo html y escapa al mensaje  
export function mensaje(){
    if(arguments.length == 1 ){ console.log(JSON.stringify(arguments[0]))};
    if(arguments.length == 2 ){ console.log(JSON.stringify(arguments[0]), JSON.stringify(arguments[1]))};

    
}

export function mensajeError(msg){
    console.log("un mensaje de error personalizado ")
    console.log(msg);
}

// INFO: Escribe un fichero en ambito local
// TODO: Hacerla entera 
// PARAMS: filename, content
export function escribeFich(absFile,content){
    try {
        fs.writeFileSync(absFile, content, 'utf8');
      } catch (err) {
        mensajeError(err);
    }

}

// INFO: Le un fichero en ambito local
// TODO: Hacerla entera 
// FIXME: si se sale del path , cuidado con escribir en zonas del sistema   
// RETURN: boolean si lo ha escrito bien 
export function leeFichero(absFile){
    try {
        const data = fs.readFileSync(absFile, 'utf8');
        return data ;
      } catch (err) {
        mensajeError(err);
    }
}

