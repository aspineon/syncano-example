//initialising syncano client
var s = new SyncanoClient('INSTANCE_NAME');

var button = document.querySelector('.submit--js');

button.addEventListener('click', function(e) {
  e.preventDefault();
  var firstName = document.querySelector('.firstname--js').value;
  var lastName = document.querySelector('.lastname--js').value;
  if (firstName.length > 0 && lastName.length > 0) {
    document.querySelector('body').classList.add('loading')
    // calling syncano socket!
    s.get('hello/hello', {
      firstname: firstName,
      lastname: lastName
    }).then(function(result) {
      document.querySelector('body').classList.add('completed')
      document.querySelector('.response__content--js').innerHTML = result.message;
    });
  } else {
    alert('Fill the fields before calling the socket!')
  }
});
