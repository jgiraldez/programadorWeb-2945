var objectList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
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
  for (var i = 0; i < objectList.length; i++) {
    var buscadoUp = buscado.toUpperCase()
    var nombre = objectList[i].firstName.toUpperCase()
    var apellido = objectList[i].lastName.toUpperCase()
    if (nombre.indexOf(buscadoUp) != -1 || apellido.indexOf(buscadoUp) != -1) {
      index = i
      break
    }
  }
  return index
}
console.log(
  'El alumno buscado esta en la posicion:',
  buscarAlumno(nombreAlumno)
)

var nuevoNombre = prompt('elija un nombre')
var nuevoApellido = prompt('elija un apellido')

// CHECK STRING
while (typeof nuevoNombre != 'string') {
  nuevoNombre = prompt('elija un nombre')
}

while (typeof nuevoApellido != 'string') {
  nuevoApellido = prompt('elija un apellido')
}

// FUNCION CREAR ALUMNO
function Alumno(firstNameObj, lastNameObj) {
  this.firstName = firstNameObj
  this.lastName = lastNameObj
}

function addToArray(toPush) {
  objectList.push(toPush)
  console.log(objectList)
}

// CREAR ALUMNO
var nuevo = new Alumno(nuevoNombre, nuevoApellido)
console.log(nuevo)

console.log(addToArray(nuevo))
