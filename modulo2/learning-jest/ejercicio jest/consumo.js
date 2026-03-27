function calcular_Total_Cafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items))
        throw new TypeError("edad inválida");
    if(!ivaPorcentaje || typeof ivaPorcentaje !== "number")
        throw new TypeError("ivaPorcentaje inválido");

    
    let subtoal=0;
    for (let item of items) {
        const subtoalItem = item.precioUnitario * item.cantidad;
        subtoal += subtoalItem;
    }
    const iva = (subtoal * ivaPorcentaje) / 100;
    const total = subtoal + iva;
    return total;
}
module.exports = {
    calcular_Total_Cafeteria
};
 
const items = 
    [
        {
         nombre: "Laptop",
         precioUnitario: 500,
         cantidad: 3
        },
        {
         nombre: "Monitor",
         precioUnitario: 300,
         cantidad: 2
        }
    ];

const resultado = calcular_Total_Cafeteria(items, 15);
console.log("resultado:", resultado);


