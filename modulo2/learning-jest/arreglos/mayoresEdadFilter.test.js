const { mayoresEdadFilter } = require('./mayoresEdadFilter');

describe('mayoresEdadFilter', () => {
    test('Happy path: [15,18,26,28] mayor de edad [18,26,28]'
        ,() => {
            expect(mayoresEdadFilter([15,18,26,28])).toEqual([18,26,28]);
        });
    test('Happy path: [] mayor de edad []',() => {
            expect(mayoresEdadFilter([])).toEqual([]);
        });
    test('Sad path: edades invalidas', () => {
        expect(() => mayoresEdadFilter('areglo')).toThrow('areglo invalido');
    });
});