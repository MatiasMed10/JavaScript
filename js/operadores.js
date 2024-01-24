console.log("Estoy en operadores");

//operador de asignacion =
let numero = 5; //declarando una variable del tipo let y las estamos asignando/inicializando con el operador '=' y con valor 5
console.log('valor de numero: ', numero);

let numero2 = 3;
console.log('Valor de numero2: ', numero2);

numero2 = numero;
console.log('valor de numero2 luego de igualarlo a numero: ', numero2);

//OPERADORES ARITMETICOS +, -, *, /, %

let valor = 10;
let valor2 = 10;

//operador suma

let suma = valor + valor2; //tener en cuenta que si el valor de las variables es distinto de numeros el operador funciona como concatenacion
console.log('El valor de suma es: ', suma);

//operador resta

let resta = valor - valor2;
console.log('El valor de resta es: ', resta);

//operador Multiplicacion

let Multiplicacion = valor * valor2;
console.log('El valor de Multiplicacion es: ', Multiplicacion);

//operador division

let division = valor/valor2;
console.log('El valor de division es: ', division);

//operador modulo o resto

let resto = valor % valor2;
console.log('El valor de resto es: ', resto);

//OPERADORES UNITARIOS

//operador de incremento

//Opcion1: valor = valor + 1;
//valor++; //esto significa que esto se va a incrementar en uno el valor de la variable
//valor+=valor2;
valor+=3;
console.log('El valor de let valor es: ',valor);

//Operador de decremento
//valor--;
//valor-=7; esto devuelve NaN
valor-=3;
console.log('El valor de let valor es: ',valor);

//operador de negacion solo funciona con valores o con variables del tipo boolean 

let logica = true;
console.log('El valor de la let logica es: ',logica);
console.log('El valor de la let logica NEGADO es: ',!logica);

//##OPERADORES CONDICIONES (RELACIONALES - LOGICOS)

//relacionales

let variable1 = '10';
let variable2 = '10';

//operador == esto significa 'igual a'
console.log('El operador ==', variable1==valor);
//operador === 'estricatamente igual' comprueba el valor de la variable sino tambien el tipo de la misma
console.log('El resultado del operador ===', variable1===valor);
//operador != 'Es distinto'
console.log('El operador != es: ', variable1!=valor);
//operador !== 'Estrictamente distinto'
console.log('El operador !== es: ', variable1!==valor);
//>, <, >=, <=
console.log('El valor de > es: ',valor>valor2);
console.log('El valor de < es: ',valor<valor2);
console.log('El valor de >= es: ',valor>=valor2);
console.log('El valor de <= es: ',valor<=valor2);

//Logicos

//--AND LOGICO &&: es true si ambas condiciones son true, caso contrario es false

console.log('Probando el &&: ',variable1!=valor && variable1!==valor);
//--OR LOGICO ||: retorna true si al menos una de las condiciones evaluadas es true;
console.log('Probando El ||: ',variable1!=valor || variable1!==valor);

