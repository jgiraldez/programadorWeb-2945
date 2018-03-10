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

console.log(studentsList)

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
  return index
}
console.log(buscarAlumno(nombreAlumno))

// AGREGAR ALUMNO AL ARRAY
function agregarAlumno() {
  do {
    var studentName = prompt('Ingrese el alumno a agregar')
  } while (!studentName)
  studentsList.push(studentName.toUpperCase())
}
agregarAlumno()

// ELIMINAR ALUMNOS DEL ARRAY
function borrarAlumno(chauAlumno) {
  var index2 = buscarAlumno(chauAlumno)
  if (index2 != -1) {
    studentsList.splice(index2, 1)
  }
}
console.log(studentsList)
borrarAlumno('Juan')
console.log(studentsList)

// GESTIONAR ALUMNOS
