
var dia1 = prompt('Ingresa una dia de la semana')

function semanaCheck(day) {
		switch (day.toLowerCase()) {
			case 'sabado':
			case 'sábado':
			case 'domingo':
				console.log('Es dia de fin de semana')
				break
			case 'lunes':
			case 'martes':
			case 'miercoles':
			case 'jueves':
			case 'viernes':
				console.log('Es dia habil')
				break
			default:
				console.log('No es un dia valido')
				break
		}	

}

semanaCheck(dia1)

var dia2 = prompt('Y otro')
semanaCheck(dia2)

var dia3 = prompt('Y otro mas')
semanaCheck(dia3)
