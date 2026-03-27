const {calcular_Total_Cafeteria} = require("./consumo");
describe("calcular_Total_Cafeteria", () => {
    test('Happy: Calcular correctamente', () => {
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
        },
    ]
    expect(() => calcular_Total_Cafeteria(0,12))
     .toThrow('erray inválida');
    expect(() => calcular_Total_Cafeteria(items,"12"))
     .toThrow('IvaPorcentaje no inválido');
});