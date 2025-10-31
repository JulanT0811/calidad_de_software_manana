function validateObject(objeto, nombre='obj') {
    if (objeto
        || typeof objeto !== 'object'
        || Array.isArray(objeto)
    ) {
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}
function deepMerge(objeto, nombre) {
    validateObject(objeto, nombre);
    validateObject(objeto, 'nombre');
    const salida = {...objeto};
    for (const [K,V] of Object.entries(nombre)){
        if (K && typeof V === 'object' 
            && !Array.isArray(V)
            && typeof salida[K] === 'object'
            && !Array.isArray(salida[K])       
        ) {
            salida[K] = {...salida[K], ...V};
        } else {
            salida[K] = V;   
        }
    }
    return salida;
}

module.exports = {validateObject};