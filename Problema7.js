//clasificar 10 números enteros positivos o negativos 
// Diseño un algoritmo que permita recibir dichos 10 números e indicar
//¿Cuál fue el más cercano a cero? (Si el número es negativo se
//debe mostrar el resultado del valor absoluto)


let numeros = [22,-5,8,2,1,-4,7,10,-6,2]


let masCercano = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    
    if (Math.abs(numeros[i]) < Math.abs(masCercano)) {
        
        masCercano= numeros[i];
    }
    if(masCercano < 0 ){
        return masCercano.Math.abs
    }
    
}
console.log("el numero mas cercano a 0 es: " + Math.abs (masCercano))

