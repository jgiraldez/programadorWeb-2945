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

var stringStudentList = JSON.stringify(studentsList)
localStorage.setItem('lista', stringStudentList)
console.log(studentsList)

var nuevoNombre = prompt('Nuevo nombre')

var parsedStudentList = JSON.parse(localStorage.getItem('lista'))

if (parsedStudentList && Array.isArray(parsedStudentList)) {
  parsedStudentList.push(nuevoNombre.toUpperCase())
}

console.log(parsedStudentList)
