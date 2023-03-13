// EL EJERCICIO SOLICITA QUE SE CALCULE LA DISTANCIA QUE HAY ENTRE UN PLANETA Y Y EL PLANETA NABOO
//Math.sqrt= DEVUELVE LA RAIZ CUADRADA DE UN NUMERO 
//Math.pow= PERMITE ELEVAR UN NUMERO A UNA POTENCIA DETERMINADA
//toFixed=redondea un número a una cantidad de decimales determinada 

function  calcularDistancia(x1,y1,x2,y2){
    
     return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)).toFixed(2)

}
let distaniciaCalculada=calcularDistancia(1,1,3,3)
console.log(`La distanicia es de ${distaniciaCalculada} UA`)