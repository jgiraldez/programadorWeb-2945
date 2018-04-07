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
  appendStudent(addName,addDni)
}

// BOTON BORRAR
function borrarAlumno(valorDni) {
  var studentList = localStorage.getItem('lista')
  studentList = studentList ? JSON.parse(studentList) : []
  var index = buscarDni(valorDni)
  if (index >= 0) {
    studentList.splice(index, 1)
    var stringStudentList = JSON.stringify(studentList)
    localStorage.setItem('lista', stringStudentList)

  } else {
    alert('el usuario no existe')
  }
}


var submitButtonDelete = document.getElementById('deleteStudentButton')

submitButtonDelete.onclick = function(event) {
  var valueDni = document.getElementById('deleteDni').value
  borrarAlumno(valueDni)
}

// BOTON SUBMIT
var submitButton = document.getElementById('addStudentButton')

submitButton.onclick = function(event) {
  var valueNombre = document.getElementById('firstName').value
  var valueDni = document.getElementById('dni').value
  agregarAlumno(valueNombre, valueDni)
}

// buscar alumno
function buscarAlumno(alumnoPasado) {
  var index = -1

  var studentList = localStorage.getItem('lista')
  studentList = studentList ? JSON.parse(studentList) : []

  for (var i = 0; i < studentList.length; i++) {
    var student = studentList[i]
    if (student.firstName.indexOf(alumnoPasado) !== -1) {
      index = i
      break
    }
  }
  return index
}

/* var submitButtonBuscarAlumno = document.getElementById('searchStudentButton')

submitButtonBuscarAlumno.onclick = function(event) {
  var valueAlumnoBuscado = document.getElementById('searchText').value
  buscarAlumno(valueAlumnoBuscado)
}
*/

var rootContainer = document.getElementById('mainList')

rootContainer.innerHTML = '<ul class="list-group" id="list" </ul>'

var listContainer = document.getElementById('list')

function appendStudent(nombre, dni) {
  var htmlFullName = '<h1>' + nombre + '</h1>'

  var htmlDni = '<p>' + dni + '</p>'

  var li = document.createElement('li')

  li.className = 'list-group-item'

  li.innerHTML = htmlFullName + htmlDni

  li.id = dni

  listContainer.appendChild(li)
}

function removeStudent(studentPosition) {

  }

var studentList = localStorage.getItem('lista')
studentList = studentList ? JSON.parse(studentList) : []
  
for (var i = 0; i < studentList.length; i++) {
  
  nombre = studentList[i].firstName
  apellido = studentList[i].lastName
  dni = studentList[i].dni
  appendStudent(nombre, apellido, dni)
}
