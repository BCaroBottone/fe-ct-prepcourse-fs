// var mundo = {continentes:7, paises:195, oceanos:5};
// for(var prop in mundo){
//     console.log("Esta es la propiedad:" +prop)
//     console.log("Este es el valor:" +mundo[prop]);
// }

var mascota ={
    animal:'Perro',
    raza:'Ovejero Aleman',
    amistoso: true,
    dueña:'Maria López',
    info: function () {
        console.log('Mi perro es un ' +this.raza);
    } 
};

mascota.info();
