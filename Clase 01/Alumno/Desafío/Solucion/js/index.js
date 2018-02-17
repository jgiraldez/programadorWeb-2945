// Pedir dos numeros
var numero1 = prompt('Por favor, indica un numero')
var numero2 = prompt('Y OTRO MAS!')

var numero1Parsed = parseInt(numero1,10)
var numero2Parsed = parseInt(numero2,10)

console.log('La suma de tus numeros es igual a ' + (numero1Parsed + numero2Parsed))
console.log('La resta de tus numeros es igual a ' + (numero1Parsed - numero2Parsed))
console.log('La division de tus numeros es igual a ' + (numero1Parsed * numero2Parsed))
console.log('La multiplicacion tus numeros es igual a ' + (numero1Parsed / numero2Parsed))