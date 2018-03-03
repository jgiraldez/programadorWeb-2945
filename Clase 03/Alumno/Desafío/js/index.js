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