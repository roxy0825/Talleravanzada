const codigosNaves = [10,-15,6,-99,8,12,2];

let codigoCercanoCero = codigosNaves[0];

if (codigoCercanoCero < 0) {
    codigoCercanoCero = Math.abs(codigoCercanoCero);
}

codigosNaves.forEach(codigoNave => {
    if (codigoNave < 0) {
        codigoNave = Math.abs(codigoNave);
    }

    if (codigoNave < codigoCercanoCero) {
        codigoCercanoCero = codigoNave;
    }
});


console.log("El codigo más cercano a cero es: " + Math.abs(codigoCercanoCero));