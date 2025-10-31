const {actualixarEdad} = require('./actualizarEdad');

describe('actualizarEdad', () => {
    test('Happy path:30->30', () => {
        const response = actualixarEdad(
            {
                nombre: 'Pedro',
                edad: 29,
            }
        );
        expect(response.edad).toBe(60);
    });
    test('Sad path: nombre / edad invalido', 
        () => {
            expect(() => actualixarEdad(
                null, 10
            )).tothrow('persona invalida');
            expect(() => actualixarEdad({}, -1))
            .toThrow('edad invalida'); 
        });
});   