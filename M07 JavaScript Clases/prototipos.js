Array.prototype.mayorQueTres = function() {
    var arregloModificado = [];
   
    for(var i=0; i<this.length; i++){
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

// class Latinoamerica {
//     constructor(){
//         this.paises = [];
//     }
// }

// Latinoamerica.prototype.agregarPais = function(pais) {
//     this.paises.push(pais);
// };

// var continente = new Latinoamerica();
// continente.agregarPais('Mexico');
// console.log(continente.paises);
