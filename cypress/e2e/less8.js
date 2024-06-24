//declare function

helloOne();
/*hellowtwo(); Para usar una funcion anonima esta se tiene que usar despues de que 
fue declarada ya que si lo hacemos antes esta simplemente no puede ser usada en cambio
una funcion declarada no importa si la usamos antes de ser declarada funcionara
*/
function helloOne() {
    console.log("Hello One")
}
helloOne();

//anonymus function

var hellowtwo = function () {
    console.log("Hello Two")
}

hellowtwo();

//ES6 function syntax or arrow function

var hellothree =()=>{
    console.log("Hello Three")
}

hellothree();

//function with arguments

function printname(name) {
    console.log("Hola "+name+" que tengas bonito inicio de semana")
    
}
printname("omar");

function suma(a,b) {
    var resultado=a+b;
    return resultado
}

var mysum=suma(2,3);
console.log(mysum)
    
import { suma2,resta } from "../e2e/misc/math.js";

var mysum=suma2(2,3);
console.log(mysum)

var myres=resta(2,3);
console.log(myres)

import * as misc from "../e2e/misc/math.js";

var myres2=misc.resta(2,7);
console.log(myres2)