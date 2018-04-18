console.log('hola mundo');
var nombre = 'Carolina';
var edad = 24;
var deudas = 399.99;
var fechaNacimiento = new Date();
var casado = false;
var estoyVacio = null;
var noEstoyDefinido = undefined;
var mutar; //undefined
/*mutar=nombre;
console.log(mutar);
mutar=edad;
console.log(mutar);
mutar=fechaNacimiento;
console.log(mutar);*/
/*if (estoyVacio) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}
// devuelve falso
if (noEstoyDefinido) {
    console.log("Verdadero")
} else {
    console.log("Falso")
} //devuelve falso
if (1) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}//verdadero
if (0) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}//Falso
if (-1) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}//verdadero
*/
/* Json * ctrl +a , ctrl +alt+l=formatear*/
var usuario = {
    "nombre": "Carolina",
    apellido: 'Calderon',
    edad: sumarDosNumeros(10,14), //ejecutar la funcion y guardar el resultado en la edad
    //utilizar funcion anonima
    /*imprimirEnConsola: function () {
        console.log(this.nombre+ ' '+ this.apellido+' '+ this.edad)
    }*/
    imprimirEnConsola: sumarDosNumeros
    //imprimirEnConsola: sumarDosNumerosVersionDos(2,1)
};
//usuario.imprimirEnConsola(1,2);
console.log(usuario.imprimirEnConsola); //sale el nombre de la funcion
console.log(usuario);
/*console.log(usuario.nombre);
console.log(usuario);
//se puede ir cambiando los atributos
delete usuario.edad;
console.log(usuario);
// agregar atributos
usuario.cedula= 1727152344;
console.log(usuario);
//no se puede definir nombre en undefined
//usuario.mascotas.nombre='loki';
// undefined porque mascotas no existe.
//
usuario.mascotas={};
usuario.mascotas.nombre='loki';
console.log(usuario);
//type of
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof deudas);
console.log(typeof casado);*/
//funciones
function sumarDosNumeros( numeroUno, numeroDos) {
    return numeroUno+numeroDos;
}
console.log(sumarDosNumeros(1,2));
// no se necesita escribir el nombre de la funcion--> FUNCION ANONIMA
var sumarDosNumerosVersionDos = function( numeroUno, numeroDos) {
    return numeroUno+numeroDos;
}
console.log(sumarDosNumerosVersionDos(1,3));
//ARREGLOS
var arreglo=[
    1,
    2,
    "Carolina",
    2.2,
    undefined,
    null,
    {
        apellido: "Calderon"
    },
    sumarDosNumeros(2,4)
];
console.log(arreglo);