//software que permita clasificar 
//alimento = {nombre, tipo (Puede ser vegetal, animal, insecto), nivel de energía aportado (números entre 100-500)}
//programa que recibA 300 alimentos y mediante una
//función primaria después de 5 segundos se pueda obtener solo los
//alimentos de tipo vegetal que entreguen más de 200 unidades de
//energía. una función callback debe permitir entregar la
//sumatoria de niveles de energía entregados por los alimentos vegetales



const alimentosInsecto = ['Abejas','Orugas','hormigas','grillos','saltahojas'];
  
const alimentosAnimales = ['Pollo','Cerdo','Cordero','Pavo','Gallina'];

const alimentosVegetales = ['Lechuga','Espinacas','Brócoli','Zanahoria','Tomate'];
  
const tipos = ['vegetal', 'animal', 'insecto'];

const alimentos = [];

for (let i = 0; i < 20; i++) {
    tipos.forEach(function(tipo) {
        if (tipo == 'vegetal') {
            alimentosVegetales.forEach(function(vegetale) {
                alimentos.push({
                    nombre: vegetale,
                    tipo: 'vegetal',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        } else if(tipo == 'animal') {
            alimentosAnimales.forEach(function(animal) {
                alimentos.push({
                    nombre: animal,
                    tipo: 'animal',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        } else {
            alimentosInsecto.forEach(function(insecto) {
                alimentos.push({
                    nombre: insecto,
                    tipo: 'insecto',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        }
    })
}

console.log(alimentos)

function getAlimentosVegetales(alimentos, callback) {

    setTimeout(function() {
        const  vegetalesMasEnergia = alimentos.filter(function(alimento) {
            return alimento.tipo === "vegetal" && alimento.nivelEnergia > 200
        });

        if (vegetalesMasEnergia.length === 0) {
            callback(`No hay informacion de los vegetales`);
            return;
        }

        callback(null, vegetalesMasEnergia);
    }, 5000)

};

getAlimentosVegetales(alimentos, function(error, nivelesEnergia) {

    if (error) {
        console.log(error)
        return;
    }

    let sumatoria = 0;
    nivelesEnergia.forEach(function(nivelEnergia) {
        sumatoria += nivelEnergia.nivelEnergia;
    });

    console.log('Sumatoria de las energia de los vegetales: ' + sumatoria)

});
