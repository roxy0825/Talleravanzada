let calcularDistancia = (x1,y1,x2,y2)=>Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

let distaniciaCalculada=calcularDistancia(1,1,3,3)
console.log(`La distanicia es de ${distaniciaCalculada} UA`)