function Student(title, year, director, actors) {
  var id = Math.random()
  var modified = false
  //// setters
  this.setfirstName = function(newFirstName) {
    firstName = newFirstName
    modified = true
  }

  this.setlastName = function(newLastName) {
    lastName = newLastName
    modified = true
  }

  this.setDirector = function(newDirector) {
    director = newDirector
    modified = true
  }

  this.setActor = function(newActor) {
    pelicula.push({
      actors: newActor
    })
    modified = true
  }
  //// getters
  this.getTitle = function() {
    return title
  }

  this.getYear = function() {
    return year
  }

  this.getDirector = function() {
    return director
  }

  this.getActors = function() {
    return actors
  }
}

var pelicula = {
  title: 'Bastardos sin Gloria',
  year: 2009,
  director: 'Quentin Tarantino',
  actors: ['Cristoph Waltz']
}

var newStudent = new Student(
  pelicula.title,
  pelicula.year,
  pelicula.director,
  pelicula.actors
)
console.log(
  newStudent.getTitle(),
  newStudent.getDirector(),
  newStudent.getYear(),
  newStudent.getActors()
)
