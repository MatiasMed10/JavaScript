console.log('Condicionales');

//IF --> SI
//Sintaxis
/* if(condicion logica a evaluar){
    accion a efectuar en caso que se cumpla la condicion
} */
let edad = 60;
/*
if (!(edad>18)) {
    console.log('Eres mayor de edad');
}
*/
/*
if (edad>=21) {
    console.log('Eres legalmente responsable');
}else{
    console.log('Eres menor de 21 años');
}
*/

if (edad<21) {
    console.log('Eres menor de edad, tu edad es:', edad);
}else if (edad>=21 && edad<50) {
    console.log('Eres joven adulto, tu edad es:', edad);
}else if (edad>=50 && edad<60) {
    console.log('Eres adulto, tu edad es:',edad);
}else{
    console.log('Eres anciano, Tu edad es:',edad);
}