//2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de 
//acceso, para ello debe programar una función que permita recibir la
//palabra clave de cada nave y separar imprimiendo solo el nombre del
//piloto asignado a cada nave.
//Tenga en cuenta que el formato de todos los datos es el siguiente:
//• ARQ2555: Sara Bel-Sun
//• ARQ2556: Nodin Chavdri
//• ARQ2557: Finn  (metodo split())

let claves = ["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri", "ARQ2557: Finn"];
// console.log(claves);

claves.forEach(clave => {
    console.log(nombrePiloto(clave));
});

function nombrePiloto(clave) {
    return clave.split(": ")[1];
}



