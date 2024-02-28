
var nota = 3.5;
var cRet = "";

switch (true) {
    case (nota > 0  && nota < 3):
        cRet = "Muy deficiente"
        break;
    case (nota > 3  && nota < 5):
        console.log("has entrado");
        cRet = "insuficiente"
        break;
    

    default:
        cRet = "Aprobado"
        break;
}


console.log("cRet", cRet )