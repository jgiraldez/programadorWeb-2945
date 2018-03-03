var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
<<<<<<< HEAD
=======
  'Domingó',
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var dayOfTheWeek = daysOfTheWeek[i]
  switch (dayOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      console.log('El ' + dayOfTheWeek + ' es día de semana')
      break
    case 'Sábado':
    case 'Domingo':
<<<<<<< HEAD
=======
    case 'domingo':
    case 'Domingó':
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      console.log('El ' + dayOfTheWeek + ' es fin de semana')
      break
    default:
      console.log(dayOfTheWeek + ' es un valor invalido')
      break
  }
}
