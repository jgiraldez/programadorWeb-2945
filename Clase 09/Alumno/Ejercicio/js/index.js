function validateAllFields() {
  var submitButtom = document.getElementById('submitButtom')

  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 0) {
    submitButtom.disabled = false
  } else {
    submitButtom.disabled = true
  }
}

var nameInput = document.getElementById('inputName')

nameInput.onblur = function(event) {
  var nameInputNode = event && event.target

  var value = nameInputNode && nameInputNode.value

  if (value) {
    nameInputNode.classList.remove('is-invalid')
    nameInputNode.classList.add('is-valid')
    console.log('El Name esta lleno')
  } else {
    nameInputNode.classList.remove('is-valid')
    nameInputNode.classList.add('is-invalid')
    console.log('el Name esta vacio')
  }
}

var passwordInput = document.getElementById('inputLastName')

passwordInput.onblur = function(event) {
  var passwordInputNode = event.target

  var value = passwordInputNode.value

  if (value) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    console.log('Last Name esta lleno')
  } else {
    passwordInputNode.classList.remove('is-valid')
    passwordInputNode.classList.add('is-invalid')
    console.log('Last Name vacio')
  }
  validateAllFields()
}

/* 
var passwordInput = document.getElementById('inputMail')

passwordInput.onblur = function (event) {
  var passwordInputNode = event.target

  var value = passwordInputNode.value

  }

  if (value) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    console.log('El pass esta lleno')
  } if(value.indexOf('.') >= 0) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    console.log('El pass no tiene punto')
  } if(value.indexOf('@') >= 0) {   
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    console.log('El pass no tiene arroba')
  } else {
    passwordInputNode.classList.remove('is-valid')
    passwordInputNode.classList.add('is-invalid')
    console.log('El pass esta vacio')
}
  validateAllFields()
}

 */
