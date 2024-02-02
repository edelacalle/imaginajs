//INFO: Cuenta las vocales de una fase


function cuentaVocales1(frase){
    const vocales="aeiou";
    let veces =[0,0,0,0,0];
    let res='', car, pos;
    frase = frase.toLowerCase();
    for(let i=0; i < frase.length; i++){
        car = frase.charAt(i);
        pos = vocales.indexOf(car);
        if (pos >=0){
            veces[pos]++
        }
    }
    for(let j=0; j < vocales.length; j++){
        res += vocales.charAt(j)+":"+veces[j]+"/";
    }
    return res  ;
} 

function cuentaVocales2(frase){
    let oRet = {a:0,e:0,i:0,o:0,u:0}
    frase = frase.toLowerCase();
    for(var i = 0 ; i< frase.length; i++){
        if( Object.keys(oRet).indexOf( frase.charAt(i) ) != -1 ){
            oRet[frase.charAt(i)] ++;
        }
    }
    return oRet;
}

function cuentaVocales3(frase){
    let oRet = {a:0,e:0,i:0,o:0,u:0}
    let aVocales = frase.match(/[aeiou]/g);
    frase = frase.toLowerCase();
    aVocales.forEach(e => oRet[e]++);
    return oRet;
}


let prueba = "En un lugar de la mancha de cuyo nombre no quiero acordarme";

console.log(cuentaVocales1(prueba))
console.log(cuentaVocales2(prueba))
console.log(cuentaVocales3(prueba))



