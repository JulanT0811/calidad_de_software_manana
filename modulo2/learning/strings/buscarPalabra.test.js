const {buscarPalabra} = require('./buscarPalabra');

describe('Buscar Palabra', () => {
    test('Happy path: Buscar palabra', () => {
        const response = buscarPalabra(
            'Hola, estoy aprendiendo Jest', 'Jest'
        )
        expect(response).toBe(true);
        const response2 = buscarPalabra(
            'Hola, estoy aprendiendo Jest'
        )
        expect(response2).toBe(false);
    });
    test('Sad path: ERROR',
        () => {
            expect(() => buscarPalabra(null, 'Jest'
            )).toThrow('frase invalida');
            expect(() => buscarPalabra('', 344))
                .toThrow('frase invalida');
        });
});