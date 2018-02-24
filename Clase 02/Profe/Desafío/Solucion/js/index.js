
var dia1 = prompt('Ingresa una dia de la semana')

function semanaCheck(day) {

	switch (day) {
		case 'Sabado':
		case 'Sábado':
		case 'Domingo':
			console.log('Es dia de fin de semana')
			break
		case 'Lunes':
		case 'Martes':
		case 'Miercoles':
		case 'Jueves':
		case 'Viernes':
			console.log('Es dia habil')
		default:
			console.log('No es un dia valido')
	}	

}

var dia1 = prompt('Y otro')
semanacheck(dia1)

var dia2 = prompt('Y otro')
semanacheck(dia2)

var dia3 = prompt('Y otro mas')
semanacheck(dia3)
