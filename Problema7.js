//clasificar 10 números enteros positivos o negativos 
//MOSTRAR EL MAS CERCANO A CERO (Si el número es negativo se
//debe mostrar el resultado del valor absoluto)


let numeros = [22,-5,8,2,1,-4,7,10,-6,2]


let masCercano = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    
    if (Math.abs(numeros[i]) < Math.abs(masCercano)) {
        
        masCercano= numeros[i];
    }
    
        
    }
    if(masCercano < 0 ){
    return Math.abs(masCercano) ;
    
}else{
    console.log("el numero mas cercano a cero es: " + Math.abs(masCercano));
}


