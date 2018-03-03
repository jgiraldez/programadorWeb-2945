function Student (firstName, lastName, age, address) {
	var id = Math.random()
	var showfullName = firstName + ' ' + lastName
	var modified = false

	this.isLegalAge = function () {
		if (age >= 18) {
			return true
		} else {
			return false
		}
	}

	this.setfirstName =  function (newFirstName) {
		firstName = newFirstName
		modified = true
	}

	this.setlastName = function (newLastName) {
		lastName = newLastName
		modified = true
	}

	this.getShowFullName = function () {
		return showfullName
	}

	this.getAddress = function () {
		return address
	}

}

var StudentAddress = {
	street: 'Cucha cucha',
    number: 1234
    actors: ['Cristoph Waltz']
    }
}

var newStudent = new Student('Laura','Lopez','21', StudentAddress)
console.log(newStudent.getShowFullName(),newStudent.isLegalAge(),newStudent.getAddress())
