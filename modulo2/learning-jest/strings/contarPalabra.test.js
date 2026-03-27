const {contarPalabra} = require('./contarPalabra');

describe('contarPalabra', () => {
    test('Happy path: Hola Munado Jest', () => {
        const response = contarPalabra(
            'Hola Munado Jest', 'Jest'
        )
        expect(response).toBe(3);
    });
    test('Sad path: ERROR',
        () => {
            expect(() => contarPalabra(null
            )).toThrow('frase invalido');
            expect(() => contarPalabra(''))
             .toThrow('palabra invalido');
            });
}); 