
$(document).ready(function () {
  var url = 'https://swapi.co/api/people'
  console.log('Empiezo a pedir info')

  AjaxCall.getData(url, showCharacterNames)
})

function showCharacterNames (error, data) {
  if (!error) {
    var characters = data.results
    for (var i = 0; i < characters.length; i++) {
      var singleCharacter = characters[i]
      console.log(singleCharacter.name)
      console.log(singleCharacter.gender)
      console.log(singleCharacter.height)
      console.log(singleCharacter.mass)
      console.log(singleCharacter.eye_color)

    }
    if (data.next) {
      $('#showMore').one('click', function () {
        AjaxCall.getData(data.next, showCharacterNames)
      })
    } else {
      $('#showMore').attr('disabled', true)
    }
  } else {
    console.log('Hay un error', error)
  }
}

var rootContainer = document.getElementById('root')

rootContainer.innerHTML = '<ul class="list-group" id="list" </ul>'

var listContainer = document.getElementById('list')

function appendCharacter(name, gender, height, weight, eyes) {
  var htmlFullName = '<h1>' + nombre + ' ' + apellido + '</h1>'

  var htmlDni = '<p>' + dni + '</p>'

  var htmlPromedio = '<p>' + promedio + '</p>'

  var li = document.createElement('li')

  li.className = 'list-group-item'

  li.innerHTML = htmlFullName + htmlDni + htmlPromedio

  li.id = id

  listContainer.appendChild(li)
}

for (var i = 0; i < students.length; i++) {
  chName = students[i].dni
  chGender = students[i].firstName
  chHeight = students[i].lastName
  chWeight = students[i].dni
  chEyes = Math.round(average(students[i].examResults))
  appendCharacter(chName,chGender,chHeight,chWeight,chEyes)
}