<<<<<<< HEAD
console.log('Pato')

function studentNameToUpperCase (studentName) {
  if (typeof studentName === 'string') {
    return studentName.toUpperCase()
  }
}

=======
>>>>>>> 81606db81e3ba4f2e2759d9b18f5d96c63c34b66
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

<<<<<<< HEAD
=======
function studentNameToUpperCase (studentName) {
  if (typeof studentName === 'string') {
    return studentName.toUpperCase()
  }
}

>>>>>>> 81606db81e3ba4f2e2759d9b18f5d96c63c34b66
function searchStudentByName (studentName) {
  var index = -1
  var studentUpperCase = studentNameToUpperCase(studentName)

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.indexOf(studentUpperCase) !== -1) {
      index = i
      break
    }
  }

  return index
}

<<<<<<< HEAD
function addStudent () {
=======
function askStudentName () {
>>>>>>> 81606db81e3ba4f2e2759d9b18f5d96c63c34b66
  var studentName

  do {
    studentName = prompt('Ingrese un nombre')
  } while (!studentName)
<<<<<<< HEAD

=======
  return studentName
}

function addStudent (studentName) {
>>>>>>> 81606db81e3ba4f2e2759d9b18f5d96c63c34b66
  var studentUpperCase = studentNameToUpperCase(studentName)

  studentsList.push(studentUpperCase)
}

function deleteStudent (studentName) {
  var index = searchStudentByName(studentName)
  if (index !== -1) {
    studentsList.splice(index, 1)
  }
}
<<<<<<< HEAD
console.log(studentsList)
deleteStudent('an')
console.log(studentsList)
=======

function abmStudents () {
  var option
  do {
    option = prompt('Ingrese una opción, agregar, eliminar o buscar')
    switch (option) {
      case 'agregar':
        var studentName = askStudentName()
        addStudent(studentName)
        break
      case 'eliminar':
        var studentName = askStudentName()
        deleteStudent(studentName)
        break
      case 'buscar':
        var studentName = askStudentName()
        var index = searchStudentByName(studentName)
        if (index === -1) {
          console.log('Estudiante no encontrado')
        } else {
          console.log(
            'El primer estudiante encontrado es ' + studentsList[index]
          )
        }
        break
      default:
        console.log('La opción ' + option, ' es incorrecta')
        option = null
        break
    }
  } while (!option)
}

abmStudents()
>>>>>>> 81606db81e3ba4f2e2759d9b18f5d96c63c34b66
