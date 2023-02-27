function edades (){
    let edades =[]
    for (let i = 0; i < 20; i++) {
       edades.push(Math.floor(Math.random()*100))
        
    }
    return edades
}


function codigos (){
    let codigos =[]
    for (let i = 0; i < 20; i++) {
       codigos.push(Math.floor(1000 + Math.random() * 9000))
        
    }
    return codigos
}

function edadMayor(edades) {
    let mayor = 0;
    console.log(edades)
    edades.forEach(edad => {
        if (edad > mayor){
            mayor=edad;
        }
        
    });
    return mayor;
}
console.log(edadMayor(edades()))

