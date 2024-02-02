function calcularLetraDni(dni) {
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    dni = parseInt(dni);
    let posicion = dni % (cadena.length - 1);
    return cadena[posicion];
}


let nDni = 50952982;

let chDni = calcularLetraDni(nDni)
console.log( `La letra del Dni ${nDni} es ${chDni}` )
