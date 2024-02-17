import {Calculadora , OperadoresDupla } from './calculadora';

const app = document.getElementById("root");

const cHola: string = "hola Mundo";
console.log(cHola);


const oCalc = new Calculadora();

const  nRet:number | boolean  = oCalc.operaDupla(4,3,OperadoresDupla.Multiplicacion)

app.innerHTML = nRet.toString() ;