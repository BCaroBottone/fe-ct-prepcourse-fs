Array.prototype.mayorQueTres = function() {
    var arregloModificado = [];
    for(let i=0; i<this.length; i++){
        if(this [i] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo);
