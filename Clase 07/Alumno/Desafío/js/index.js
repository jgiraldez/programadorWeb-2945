var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

localStorage.setItem('lista', JSON.stringify(studentsList))

var nombreBuscado = prompt('nombre a eliminar').toUpperCase()

if (localStorage.getItem('lista')) {
  listaParseada = JSON.parse(localStorage.getItem('lista'))
} else {
  listParseada = []
}

function buscarBorrar(alumno) {
  for (var i = 0; i < listaParseada.length; i++) {
    if (listaParseada[i].indexOf(alumno) !== -1) {
      listaParseada.splice(i, 1)
      break
    } else {
      console.log('el alumno no existe')
    }
  }
  console.log(listaParseada)
}

buscarBorrar(nombreBuscado)

localStorage.setItem('lista', JSON.stringify(listaParseada))
