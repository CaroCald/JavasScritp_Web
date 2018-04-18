console.log('hola mundo');
var nombre= 'Carolina';
var edad= 24;
var deudas = 399.99;
var fechaNacimiento= new Date();
var casado = false;
var estoyVacio=null;
var noEstoyDefinido=undefined;
if(estoyVacio){
    console.log("Verdadero")
}else{
    console.log("Falso")
}
// devuelve falso
if(noEstoyDefinido){
    console.log("Verdadero")
}else{
    console.log("Falso")
} //devuelve falso
if(1){
    console.log("Verdadero")
}else{
    console.log("Falso")
}//verdadero
if(0){
    console.log("Verdadero")
}else{
    console.log("Falso")
}//Falso
if(-1){
    console.log("Verdadero")
}else{
    console.log("Falso")
}//verdadero