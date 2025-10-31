function sumaHasta(numero){
    if(typeof numero !== 'number'
        || numero.isNaN(numero)
        ||numero < 1
        ){
         throw new TypeError("numero invalido");
        }
    let total=0;
    for(let i=1;i<=numero;i++){
        total+=i;
    }
    return total;
}