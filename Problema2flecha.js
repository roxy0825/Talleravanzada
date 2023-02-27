let claves = ["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri", "ARQ2557: Finn"];
// console.log(claves);



let nombrePiloto=clave=> clave.split(": ")[1];

claves.forEach(clave => {
    console.log(nombrePiloto(clave));
});
