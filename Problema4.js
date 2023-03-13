
// contabilizar la cantidad de energía de sables que tienen negativa

let numerosables = [2,4,-8,5,-6,-10,9,-7,-15];

let filtrar = numerosables.filter(function(numerosable){
    return(numerosable < 0)
})
console.log(filtrar.length)


