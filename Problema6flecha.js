const edades = () => {
    const edades = [];
    for (let i = 0; i < 20; i++) {
        edades.push(Math.floor(Math.random() * 10));

    }
    return edades;
}


const codigos = () => {
    const codigos = []
    for (let i = 0; i < 20; i++) {
        codigos.push(Math.floor(1000 + Math.random() * 9000));
    }
    return codigos;
}

const edadMayor = (edades) => {
    let mayor = 0;
    edades.forEach(edad => {
        if (edad >= mayor) {
            mayor = edad;
        }
    });

    return mayor;
}

const listaedades = edades();
const mayor = edadMayor(listaedades);

const edadRepetida = (edades, edadmayor) => {
    let edadesRepetidas = 0;
    edades.forEach(edad => {

        if (edadmayor == edad) {
            edadesRepetidas++;
        }
    })

    return edadesRepetidas;
}


console.log("La edad mayor es: " + mayor);
console.log(`La edad ${mayor} se repite ${edadRepetida(listaedades, mayor)}`);