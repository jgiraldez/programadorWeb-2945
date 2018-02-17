// Nombre
var name = prompt('Por favor, indica tu nombre')

console.log ('Hola ' + name + '!')

// Suma
var numero1 = prompt('Por favor, indica tu número de la suerte')

var numero1Parsed = parseInt(numero1,10)

var numero2 = 10

console.log('Tu numero +10 es igual a  ' + (numero1Parsed + numero2))

// Resta
var numero3 = prompt('Por favor, indica otro número de la suerte')

var numero3Parsed = parseInt(numero3,10)

var numero4 = 5

console.log('Tu numero -5 es igual a  ' + (numero3Parsed - numero4))

// Suma x2
var numero5 = prompt('Por favor, indica otro MAS')
var numero6 = prompt('Y OTRO MAS')

var numero5Parsed = parseInt(numero5,10)
var numero6Parsed = parseInt(numero6,10)

console.log('La suma de tus numeros es igual a ' + (numero5Parsed + numero6Parsed))