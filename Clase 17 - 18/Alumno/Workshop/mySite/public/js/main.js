$(document).ready(function () {

  $('#contact').click(function () {
    $('#root').load('../partials/contact.html', function () {
      $('#submitButton').click(function () {
        $('#root').load('../partials/greetings.html')
      })
    })
  })

  $('#home').click(function () {
    $('#root').load('../partials/home.html', function () {
    })
  })

  $('#people').click(function () {
    $('#root').load('../partials/people.html', function () {
    })
  })

  $('#localStorage').click(function () {
    $('#root').load('../partials/local-storage.html', function () {
    })
  })
})
