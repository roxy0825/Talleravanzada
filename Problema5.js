//salario 3500000 mensuales, comisión de 1500000 por cada UNA menos el 5% de deducciones por
//impuestos sobre el total. 
//calcule e imprima el salario mensual de un vendedor 




function salarios(cantVenta) {
    return (3500000+1500000*cantVenta) - (3500000+1500000*cantVenta)*0.05;
} 

console.log(salarios(1))