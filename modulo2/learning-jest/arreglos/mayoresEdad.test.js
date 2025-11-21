const { maximo } = require('./maximo_con_math');
describe('Maximo con funcion Math', () => {
    Test('Happy path: [4,9,2,10] mayor es 10', () => {
        expect(maximo([4,9,2,10])).toBe(10);
    });
    Test('Happy path: [-5, -1] mayor es -1', () => {
        expect(maximo([-5, -1])).toBe(-1);
    });
    Test('Sad path: arreglo invalido', () => {
        expect(() => maximo ([])).toThrow('arreglo invalido');
        expect(() => maximo ('edificio')).toThrow('arreglo invalido');
    });
});