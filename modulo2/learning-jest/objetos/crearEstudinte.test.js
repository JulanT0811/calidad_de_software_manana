const {crearEstudiante} = require('./crearEstudinte');

describe('crearEstudiante', () => {
    test('Happy path:', () => {
        expect(crearEstudiante(maria, 17)).toBe({
            nombre: 'Maria',
            edad: 17,
        });
    });
    test('Sad path: nombre / edad invalido', () => {
        expect(() => crearEstudiante('', 20)).toThrow('nombre invalido');
        expect(() => crearEstudiante('Ana', -1)).toThrow('edad invalida');
    });
});