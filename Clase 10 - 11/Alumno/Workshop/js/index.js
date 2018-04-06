// validacion nombre
var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = function(event) {
  var firstNameInputNode = event && event.target

  var value = firstNameInputNode && firstNameInputNode.value

  if (value) {
    firstNameInputNode.classList.remove('is-invalid')

    firstNameInputNode.classList.add('is-valid')

    console.log('nombre valido')
  } else {
    firstNameInputNode.classList.remove('is-valid')

    firstNameInputNode.classList.add('is-invalid')

    console.log('nombre vacío')
  }
}

// buscar DNI
function buscarDni(dniPasado) {
  var index = -1

  var studentList = localStorage.getItem('lista')
  studentList = studentList ? JSON.parse(studentList) : []

  for (var i = 0; i < studentList.length; i++) {
    var student = studentList[i]
    if (student.dni.indexOf(dniPasado) !== -1) {
      index = i
      break
    }
  }
  return index
}

// validacion DNI
var dniInput = document.getElementById('dni')

dniInput.onblur = function(event) {
  var dniInputNode = event && event.target

  var value = dniInputNode && dniInputNode.value

  if (value > 0 && buscarDni(value) === -1) {
    dniInputNode.classList.remove('is-invalid')

    dniInputNode.classList.add('is-valid')

    console.log('Tengo un valor en el input')
  } else {
    dniInputNode.classList.remove('is-valid')

    dniInputNode.classList.add('is-invalid')

    console.log('NO tengo un valor en el input')
  }
}

// Agregar Alumno
function agregarAlumno(addName, addDni) {
  var studentList = localStorage.getItem('lista')
  studentList = studentList ? JSON.parse(studentList) : []

  studentList.push({
    firstName: addName,
    dni: addDni
  })
  var stringStudentList = JSON.stringify(studentList)
  localStorage.setItem('lista', stringStudentList)
}

// BOTON BORRAR
function borrarAlumno(valorDni) {
  var studentList = localStorage.getItem('lista')
  //  studentList = studentList ? JSON.parse(studentList) : []
  if (buscarDni(valorDni) === -1) {
    studentlist.splice(index, 1, 0)
    var stringStudentList = JSON.stringify(studentList)
    localStorage.setItem('lista', stringStudentList)
  } else {
    alert('el usuario no existe')
  }
}

var submitButton = document.getElementById('deleteStudentButton')

submitButton.onclick = function(event) {
  var valueDni = document.getElementById('deleteDni').value
  borrarAlumno(valueDni)
}

// BOTON SUBMIT
var submitButton = document.getElementById('addStudentButton')

submitButton.onclick = function(event) {
  var valueName = document.getElementById('firstName').value
  var valueDni = document.getElementById('dni').value
  console.log(valueName, valueDni)
  agregarAlumno(valueName, valueDni)
}
