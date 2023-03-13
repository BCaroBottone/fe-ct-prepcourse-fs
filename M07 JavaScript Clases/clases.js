// function Auto (puertas, color, marca, año, ruedas) {
//     this.puertas= puertas;
//     this.color. color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function(){
//         console.log('Esto es un ' + this.marca + 'de color' + this.color);
//     };
// }

// var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4)

// miPrimerAuto.informacion();

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);


class Football{
    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new Football('Maradona');
var brasil = new Football('Pele');
argentina.obtenerNombre();
brasil.obtenerNombre();
