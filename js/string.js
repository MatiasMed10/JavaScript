console.log('Clase string');

let texto = '  Hola valentin ';

console.log('El valor del texto es:',texto);

//Propiedad: unica propiedad segun documento oficial 

//length sirva para obtener la longitud de un string

let longitud = texto.length;

console.log('La longitud de texto es:',longitud);

//Metodos

let mayusculas = texto.toUpperCase();
console.log('El resultado de mayuscula es:',mayusculas);

let minus = texto.toLowerCase();
console.log('El resultado de minus es:',minus);

let posicion = texto.indexOf(' ');
console.log('El resultado de posicion es:',posicion);

let subcadena = texto.slice(0,4);
console.log('El resultado de subcadena es:',subcadena);

let reemplazo = texto.replace('valentin', 'Alan');
console.log('El resultado de reemplazo es:',reemplazo);

//eliminar espacio en blanco

let sinEsp = texto.trim();
console.log('El resultado de aplicar trim es:',sinEsp.length);

let trinStart = texto.trimStart();
console.log('El resultado de aplicar trineStar es:',trinStart.length);

//## MATH

let num = -5;
let valorAbs = Math.abs(num);
console.log('El valor absoluto de num es:',valorAbs);

/*ARRAYS -->*/ let arrayNumeros = [3,5,7,78,90,0,num];
console.log('El contenido del array de numeros es:',arrayNumeros);

//Max y min

let max = Math.max(...arrayNumeros);
console.log('El valor maximo del array de numeros es:',max);

let max2 = Math.max(num, 10, 100, 25);
console.log('El valor max2 es:',max2);

let min = Math.min(0,6,3,Math.abs(num));
console.log('El valor minimo es:',min);

//El metodo Math.round() devuelve el valor de un numero redondeado al numero entero mas cercano. Por ejemplo

let numero2 = 5.5;
let numeroRedondeado2 = Math.round(numero2);
console.log('El numero redondeado es: ',numeroRedondeado2);

let numero3 = 5.6;
let numeroRedondeado3 = Math.floor(numero3);
console.log('El numero redondeado es: ',numeroRedondeado3);

let numero4 = 5.6;
let numeroRedondeado4 = Math.ceil(numero4);
console.log('El numero redondeado es: ',numeroRedondeado4);

//El metodo Math.random() devuelve un numero pseudoaleatorio entre 0 y 1. Por ejemplo:
let numeroAleatorio = Math.random();
console.log('El numero aleatorio es:',numeroAleatorio);
