const { sumaHasta } = require('./sumaHasta');

describe('sumaHasta', () => {
    test('Happy path: numero 5 suma es', () => {
        expect(sumaHasta(5)).toBe(15);
    });
    test('Happy path: numero1 suma es', () => {
        expect(sumaHasta(1)).toBe(false);
    });
    test('Sad path: número invalido', () => {
        expect(() => sumaHasta(-1)).toThrow('número invalido');
        expect(() => sumaHasta('10')).toThrow('número invalido');
        expect(() => sumaHasta('2.5')).toThrow('número invalido');
        
    });
});