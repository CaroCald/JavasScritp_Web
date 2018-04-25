let arregloNumeros = [1, 2, 3, 4, 5];
let arregloDeudas = [143, 2343, 333, 444, 5343, 52, 12, 223, 1];
let arregloUsuarios: UsuarioArreglo[] = [
    //let : Array<UsuarioArreglo <=[
    {
        nombre: 'Carolina',
        edad: 28
    },
    {
        nombre: 'Luis',
        edad: 10
    },
    {
        nombre: 'Andres',
        edad: 70
    },
    {
        nombre: 'Marta',
        edad: 32
    },
    {
        nombre: 'Maria',
        edad: 25
    },
];
let sumarDosNumeros = (numeroUno: number, numeroDos: number) => { //fat arrow function
    return numeroUno + numeroDos;
};
let totalEdades = arregloDeNumeros => {
    //codigo extra
};
let facultades = a => ['Facultad1', 'Facultad2']; //devuelve el arreglo, omite la palabra reutrn

let facultadesDos = function (a: number, b?: number) { //?parametro opcional
    return ['Facultad1', 'Facultad2'];
};
//primero parametros requeridos luego los opcionales
//en un constructor se puede hacer lo mismo

/*arregloNumeros.forEach(
    (valor, indice, arreglo)=>{
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
    }
);*/

// for each es un operador
let sumar = 0;
arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        sumar = sumar + valor;
        console.log(sumar);
    }
);

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) => { //una funcion
        return totalAcumulado - valorArreglo;
    },
    20 //valor inicial
);
console.log('resultado', resultadoDeLaSuma);

let resultadoDeLaSumaDos = arregloNumeros.reduce((totalAcumulado, valorArreglo) => totalAcumulado - valorArreglo, 20);
//TIPAR ARREGLOS DE OBJETOS
let resultadoDeLasEdaes = arregloUsuarios.reduce(
    (totalAcumulado, usuarioArreglo: UsuarioArreglo) => { //una funcion
        return totalAcumulado + usuarioArreglo.edad;
    },
    0 //valor inicial
);
console.log('resultado de las edades ', resultadoDeLasEdaes);

//INTERFACES PARA TIPAR DATOS
interface UsuarioArreglo {
    nombre: String;
    edad: number;
    deuda?: number;
}

//mutar devuelve un arreglo transformado
function calcularDeudaUsuario(edad: number) {
    return arregloDeudas.reduce(
        (totalAcumulado, deuda: number) => {
            return totalAcumulado + ((edad / 100) * deuda)
        },
        0
    );
}
let usuariosConCincoAniosMenos = arregloUsuarios.map(
    (usuario: UsuarioArreglo) => {
        usuario.edad = usuario.edad - 5;
        usuario.edad=calcularDeudaUsuario(usuario.edad);
        return usuario
    }).filter( (usuario:UsuarioArreglo)=> {return usuario.deuda>100;});

console.log('usuarios con deudas', usuariosConCincoAniosMenos);
// filter
