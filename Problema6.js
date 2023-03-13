// recibir 20 edades y 20 códigos diferentes generadas aleatoriamente
//determine  mayor. Y CUANTO SE REPITE

function edades() {
    let edades=[]
    for (let i = 0; i < 20; i++) {
        edades.push(Math.floor(Math.random()*10));
        
    }
    return(edades)
}


function codigos() {
    let codigos=[]
    for (let i = 0; i < 20; i++) {
        codigos.push(Math.floor(1000 + Math.random()* 9000));
        
    }
    return(codigos)
}

let listaedades=edades()
function edadmayor(edades) {
    let mayor=0;
    console.log(edades);
    edades.forEach(edad => {
        if (edad>=mayor) {
            mayor=edad;
        }
    });

    return mayor;

}

let mayor=edadmayor(listaedades)
function edadRepetida(edades,edadmayor) {
    let i = 0;
   edades.forEach(edad =>{

    if (edadmayor==edad) {
        i++;
    }
})
  
return i
}


console.log("La edad mayor es: " + mayor);
console.log(`La edad ${mayor} se repite ${edadRepetida(listaedades, mayor)}`);





