function edadesMayores(arreglo, edadLimite) {

    if (!Array.isArray(arreglo) || arreglo.length === 0) {
        throw new Error('arreglo invalido');
    }

    if (typeof edadLimite !== 'number') {
        throw new Error('edad limite invalida');
    }

    let edadesFiltradas = [];

    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > edadLimite) {
            edadesFiltradas.push(arreglo[i]);
        }
    }

    return edadesFiltradas;
}

test('debe retornar edades mayores al limite', () => {
    expect(edadesMayores([15, 18, 25, 30, 12], 18)).toEqual([25, 30]);
});

test('debe lanzar error con arreglo vacio', () => {
    expect(() => edadesMayores([], 18)).toThrow('arreglo invalido');
});

test('debe lanzar error con edad limite invalida', () => {
    expect(() => edadesMayores([20, 30], '18')).toThrow('edad limite invalida');
});

module.exports = edadesMayores;
