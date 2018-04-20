var segundoNombre = 'Carolina';
//let segundoNombreVersionDos: String; //cuando no se le asigna un valor
//let segundoNombreVersionTres: any; // variable normal en javascript se puede igualar a cualquier cosa
var cedula = '1727152132';
segundoNombre = 'Diana';
//cedula='1278189191'; //variable es una constante y es solo para readOnly
var URL_POLI = 'https://www.epn.edu.ec';
//segundoNombre=122; //Duck Typing
//--------------TIPOS DE DATOS---------
var nombre;
var edad;
edad = 28;
var fecha = new Date();
var casado = false;
//let mascotas: object={};
//------------CLASE------------
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Temple Strings tilde invertida
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es " + this.mCedula + " la edad es " + this.mEdad);
    };
    return Usuario;
}());
var usuarioOtro = {
    nNombre: 'Jose',
    mEdad: 22,
    mCedula: '112121212'
};
var usuario = new Usuario('Carolina', 24, '123332323');
console.log(usuario);
console.log(usuarioOtro);
console.log(usuario.imprimirEnConsola());
var usuarioCuatro;
usuarioCuatro = {
    mNombre: 'Caro',
    mEdad: 22,
    mCedula: '121212'
    // imprimirEnConsola():
};
var usuarioTres = /** @class */ (function () {
    function usuarioTres(mNombre, mEdad, mCedula) {
        this.mNombre = mNombre;
        this.mEdad = mEdad;
        this.mCedula = mCedula;
    }
    return usuarioTres;
}());
