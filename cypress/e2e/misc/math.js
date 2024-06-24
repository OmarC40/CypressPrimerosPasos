export function suma2(a, b) {
    return a + b;
}

export function resta(a, b) {
    return a - b;
}


 class MathClass{
     /**
      * Este metodo va imprimir la aula en la cual es la clase
      * @param {String} aula 
      */

    printMathclass(aula){
        console.log(aula)
    }

    printHora(hora){
        console.log(hora)
    }
}

export const clasesMath = new MathClass()