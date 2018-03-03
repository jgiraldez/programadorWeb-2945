<<<<<<< HEAD
//Desafio 1 
//

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function average (x) {
	var total = 0
	for (var i = 0; i < x.length; i++) {
		total = total + x[i]	
	}
	return total / x.length
}

console.log(average(examResults))


//
// Desafio 2
//

var student = {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address:{
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  }


function studentStats(y) {
	console.log('Nombre:',
	y.firstName, 
	y.lastName,
	'DNI:', y.dni,',',
	'Promedio:', average(y.examResults),',',
	'Direccion:', y.address.street,y.address.number)
}
studentStats(student)


//
//Desafio 3
//

// Array ejemplo:
=======
// var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

// var averageResult = averageExamResult(examResults)

// console.log(averageResult)

// var student = {
//   firstName: 'Laura',
//   lastName: 'Lopez',
//   dni: 45678987,
//   address: {
//     street: 'Cucha cucha',
//     number: 1234
//   },
//   examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
// }

// showStudentDetail(student)
>>>>>>> 254da142665a5d923960699adc34c85957a1d517

var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
<<<<<<< HEAD
    address:{
=======
    address: {
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
<<<<<<< HEAD
    address:{
=======
    address: {
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
<<<<<<< HEAD
    address:{
=======
    address: {
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
<<<<<<< HEAD
    address:{
=======
    address: {
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      street: 'Zapiol',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
<<<<<<< HEAD
    address:{
=======
    address: {
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

<<<<<<< HEAD
var nombreAlumno = prompt('Nombre de un alumno')
function buscarAlumno(z) {
	for (var i = 0; i < students.length; i++) {
		if ( z === students[i].firstName) {
			studentStats(students[i])
			break
		} /*else {
			console.log('No es Alumno')
			continue
		}*/
	}
}
buscarAlumno(nombreAlumno)
=======
var name = prompt('Ingresa')
searchStudentByName(name)
// searchStudentByName('Pablo')
// searchStudentByName('PEPE')

function searchStudentByName (studentName) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    if (student.firstName === studentName) {
      showStudentDetail(student)
      break
    }
  }
}

function showStudentDetail (student) {
  var fullName = student.firstName + ' ' + student.lastName

  var averageResult = ', Promedio: ' + averageExamResult(student.examResults)

  var dni = ', DNI: ' + student.dni

  var street = student.address && student.address.street
  var streetNumber = student.address && student.address.number
  var address = ', Dirección: ' + street + ' ' + streetNumber

  console.log(fullName + averageResult + dni + address)
}

function averageExamResult (examResults) {
  var total = 0
  for (var i = 0; i < examResults.length; i++) {
    var result = examResults[i]
    total = total + result
  }

  return total / examResults.length
}
>>>>>>> 254da142665a5d923960699adc34c85957a1d517
