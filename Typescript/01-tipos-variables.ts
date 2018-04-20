let segundoNombre: String = 'Carolina';
//let segundoNombreVersionDos: String; //cuando no se le asigna un valor
//let segundoNombreVersionTres: any; // variable normal en javascript se puede igualar a cualquier cosa
const cedula = '1727152132';

segundoNombre = 'Diana';
//cedula='1278189191'; //variable es una constante y es solo para readOnly
const URL_POLI = 'https://www.epn.edu.ec';
//segundoNombre=122; //Duck Typing
//--------------TIPOS DE DATOS---------
let nombre: String;
let edad: Number;
edad = 28;
let fecha: Date = new Date();
let casado: boolean = false;
//let mascotas: object={};

//------------CLASE------------
class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula:String) {
        this.mNombre = nombre;
        this.mEdad=edad;
        this.mCedula=cedula;
    }


    public imprimirEnConsola(){
        //Temple Strings tilde invertida
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es ${this.mCedula} la edad es ${this.mEdad}`)
    }
}
let  usuario: Usuario= new Usuario('Carolina', 24, '123332323');
console.log(usuario);
//usuario.imprimirEnConsola();
