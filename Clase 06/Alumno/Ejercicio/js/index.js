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
// A MAYUSCULAS

var nombreAlumno = prompt('nombe de alumno')

function aCaps(enMinuscula) {
  var pasadoCaps = enMinuscula.toUpperCase()
  return pasadoCaps
}

// BUSCAR ALUMNO EN ARRAY

function buscarAlumno(buscado) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var buscadoUp = buscado.toUpperCase()
    if (studentsList[i].indexOf(buscadoUp) != -1) {
      index = i
      break
    }
  }
  console.log(index)
}

buscarAlumno(nombreAlumno)
