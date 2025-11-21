function puedeConducir(edad) {
    if (!Number.isInteger(edad) || edad < 0)
        throw new typeError('edad invalida');
    return edad >= 18 ? 'Si': 'No';
} 
module.exports = { puedesConducir };