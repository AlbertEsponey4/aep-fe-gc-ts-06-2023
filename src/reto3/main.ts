let arrayElectrodomesticos = []

//instanciamos 10 electrodomésticos
const electrodomestico1 = new Electrodomestico(200 , "negro", "A", 15);
const television1 = new Television(400, "azul", "B", 30, 32, true);
const lavadora1 = new Lavadora(600, "blanco", "C", 8, 12);
const electrodomestico2 = new Electrodomestico(200, "negro", "D", 12);
const television2 = new Television(400, "azul", "E", 20, 45, true);
const lavadora2 = new Lavadora(600, "blanco", "F", 8, 5);
const electrodomestico3 = new Electrodomestico(200, "BLANCO", "A", 10);
const television3 = new Television(400, "azul", "B", 30, 33, true);
const lavadora3 = new Lavadora(600, "blanco", "C", 8, 7);
const lavadora4 = new Lavadora(600, "negro", "F", 2, 5);

arrayElectrodomesticos[0] = electrodomestico1;  //precio esperado: 200 + 100 + 10 = 310
arrayElectrodomesticos[1] = television1;        //precio esperado: 400 + 50 + 50 + 80 = 580
arrayElectrodomesticos[2] = lavadora1;          //precio esperado: 670
arrayElectrodomesticos[3] = electrodomestico2;  //precio esperado: 260
arrayElectrodomesticos[4] = television2;        //precio esperado: 530 + (530*0.3) = 689
arrayElectrodomesticos[5] = lavadora2;          //precio esperado: 620
arrayElectrodomesticos[6] = electrodomestico3;  //precio esperado: 310
arrayElectrodomesticos[7] = television3;        //precio esperado: 580
arrayElectrodomesticos[8] = lavadora3;          //precio esperado: 670
arrayElectrodomesticos[9] = lavadora4;          //precio esperado: 620

//inicializamos la variable donde calcularemos el precio del electrodoméstico en cada iteración y el string donde guardaremos el tipo de Electrodoméstico.
let precio: number;
let tipoElectrodomestico: string;

//inicializamos precios totales a 0
let precioTelevisores: number = 0;
let precioLavadoras: number = 0;
let precioElectrodomesticos: number = 0;

//recorremos el array de electrodomésticos calculando el precio final del producto y incrementando el precio total de los televisores y lavadoras en caso de que lo sean, y incrementando el precio TOTAL de electrodomésticos siempre.
for (let electrodomestico of arrayElectrodomesticos){
    precio = electrodomestico.precioFinal();

    if (electrodomestico instanceof Television) {
        tipoElectrodomestico = "Televisor";
        precioTelevisores += precio;
    } else if (electrodomestico instanceof Lavadora) {
        tipoElectrodomestico = "Lavadora";
        precioLavadoras += precio;
    } else {
        tipoElectrodomestico = "Electrodoméstico";
    }

    precioElectrodomesticos += precio;
    console.log(`El precio final del ${tipoElectrodomestico} es: ${precio}`);
    console.log("--------------------------------------------------");
}

console.log(`El precio final de las LAVADORAS es: ${precioLavadoras}`); //precio esperado: 2580
console.log(`El precio final del los TELEVISORES es: ${precioTelevisores}`); //precio esperado: 1849

console.log(`El precio final de TODOS los ELECTRODOMÉSTICOS es: ${precioElectrodomesticos}`); //precio esperado: 5309