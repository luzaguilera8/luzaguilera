const gastosElectrodomesticos = [];
let marcasElectrodomesticos = ['SAMSUNG', 'LG', 'WHIRLPOOL', 'DREAN'];
let categoriasElectrodomesticos = ['LAVARROPAS', 'TV', 'MICROONDAS', 'LICUADORA','HORNO ELECTRICO'];
let disponible = 3000;

alert("¡Bienvenido al registro de gastos de Electrodomésticos!\n\nRecuerda que solo puedes ingresar 4 tipos de electrodomésticos: Lavadora, Refrigerador, Microondas y Licuadora.\nEl límite de gasto es de $2000 USD.");

let categoriaIngresada;
do {
    categoriaIngresada = prompt("Ingrese el tipo de electrodoméstico que desea comprar:\n(Para salir, escriba SALIR)").toUpperCase().trim();
    if (categoriasElectrodomesticos.includes(categoriaIngresada)) {
        let marcaIngresada;
        do {
            marcaIngresada = prompt(`Ingrese la marca del ${categoriaIngresada}:`).toUpperCase().trim(); // Convertir a mayúsculas
            if (!marcasElectrodomesticos.includes(marcaIngresada)) {
                alert("Marca de electrodoméstico no válida. Por favor, ingrese una de las siguientes marcas: Samsung, LG, Whirlpool o Bosch.");
            }
        } while (!marcasElectrodomesticos.includes(marcaIngresada.toUpperCase())); // Convertir a mayúsculas

        let montoGasto;
        do {
            montoGasto = parseInt(prompt(`Ingrese el precio del ${categoriaIngresada} ${marcaIngresada}:`));
            if (montoGasto > disponible) {
                alert(`¡El precio del ${categoriaIngresada} ${marcaIngresada} supera tu límite de gasto!\nTu límite de gasto es de $2000 USD.`);
            }
        } while (isNaN(montoGasto) || montoGasto > disponible);
        disponible -= montoGasto;
        let gastoElectrodomestico = {
            categoria: categoriaIngresada,
            marca: marcaIngresada,
            precio: montoGasto
        };
        gastosElectrodomesticos.push(gastoElectrodomestico);
        alert(`Has registrado la compra de un ${categoriaIngresada} ${marcaIngresada} por $${montoGasto} USD.\nTe quedan disponibles $${disponible} USD.`);
    } else if (categoriaIngresada !== "SALIR") {
        alert("¡Tipo de electrodoméstico no válido! Por favor, ingrese uno de los tipos permitidos: Lavadora, Refrigerador, Microondas o Licuadora.");
    }
} while (categoriaIngresada !== "SALIR");

const calcularTotalGastosElectrodomesticos = () => {
    let totalGastosElectrodomesticos = gastosElectrodomesticos.reduce((total, gasto) => total + gasto.precio, 0);
    return totalGastosElectrodomesticos;
}

const calcularPromedioGastosElectrodomesticos = () => {
    const totalGastosElectrodomesticos = calcularTotalGastosElectrodomesticos();
    const promedio = totalGastosElectrodomesticos / gastosElectrodomesticos.length;
    return promedio.toFixed(2);
}

console.log("Registro de gastos de Electrodomésticos: ", gastosElectrodomesticos);
console.log("Total de gastos: $", calcularTotalGastosElectrodomesticos());
console.log("Promedio de gastos: $", calcularPromedioGastosElectrodomesticos());

categoriasElectrodomesticos.forEach((categoria) => {
    const gastosCategoria = gastosElectrodomesticos.filter((gasto) => categoria === gasto.categoria);
    const sumaCategoria = gastosCategoria.reduce((total, gasto) => total + gasto.precio, 0);
    console.log(`Total de gastos en ${categoria}: $${sumaCategoria}`);
});
