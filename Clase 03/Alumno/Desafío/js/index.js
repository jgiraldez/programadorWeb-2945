// DESAFIO 1

var n1 = prompt('dame un numero!')
var n2 = prompt('dame otro!')

function toInt(x) {
	return parseInt(x,10)
}

var numero1 = toInt(n1)
var numero2 = toInt(n2)

function sumNum(num1,num2) {
	var sum = num1 + num2
	console.log(sum)
}


function minNum(num1,num2) {
	var min = num1 - num2
	console.log(min)
}


function mulNum(num1,num2) {
	var mul = num1 * num2
	console.log(mul)
}

function divNum(num1,num2) {
	if (num2 != 0) {
		var div = num1 / num2
		console.log(div)
	}
}

sumNum(numero1,numero2)
minNum(numero1,numero2)
mulNum(numero1,numero2)
divNum(numero1,numero2)

// DESAFIO 2

var operacion = prompt('que operacion queres realizar?')
var numero1Op = toInt(prompt('dame un numero para la operacion!'))
var numero2Op = toInt(prompt('dame otro para la operacion!'))

function opFun(op) {

	switch (op) {
		case 'división':
		case 'division':
			do {
				var checknumero2Op = toInt(prompt('por favor ingresa un numero distinto de 0'))
			} while (numero2Op = 0)
			divNum(numero1Op,checknumero2Op)
			break
		case 'multiplicación':
		case 'multiplicacion':
			mulNum(numero1Op,numero2Op)
			break
		case 'resta':
			minNum(numero1Op,numero2Op)
			break
		case 'suma':
			sumNum(numeroOp1,numeroOp2)
			break
		default :
			console.log('por favor ingresa una operacion valida')
	
	}	

}
opFun(operacion.toLowerCase())
