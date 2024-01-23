//Aqui vamos a comnzar con javascript
console.log('Hola, Mundo!!');

//Tipo de datos

/*String: Cadena de caracteres, Se lo respresenta por que esta 
contenido entre comillas simples o dobles*/
//Number: Todos los numeros
//Booleanos: Logicos solo toman 2 valores True o False

//Array:
//Object:
//Empty: Null, nada.

//Variables: (var - let - const)

//var deprecada --> no se usa
//crear o declarar una variable

//sintaxis:
/*
tipo de variable [nombre de la variable (camelCase /
nombre-de-la-variable / nombre_de_la_variable)] = [string o 
number o boolean o arrayu o object];
*/

let mensaje = "Esto es un mensaje";
console.log(mensaje);
document.write('<br>' + mensaje);
const token = 'token';
//console.log('let mensaje-->',mensaje);
console.log('const token-->',token);
//Cambiar valor de una variale

mensaje = 'Esto es otro mensaje distinto';
console.log(mensaje);
document.write('<br>' + mensaje);

mensaje = 50;   
console.log(mensaje);
document.write('<br>' + mensaje);

let numero_1 = 20;
let numero_2 = 20;
let suma = numero_1 + numero_2;
console.log(numero_1 + numero_2);

document.write('<br>' + (numero_1 + numero_2));

document.write('<br> El resultado de la suma es: ' + suma);

//Esto es un error --> token = 'otro token'; (No se puede cambir el valor de una constante)

//imprimir datos en el documento html

//document.write("Esto es un document.write");
//ALERT: 
alert('Hola Mundo con un ALERT')
alert('El resultado de la suma es: ' + suma);
alert('<br>' + (numero_1 + numero_2));

