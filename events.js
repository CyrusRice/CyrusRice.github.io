let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  console.log('================= Form Submission ====================')
  console.log('Email: ' + document.getElementById('email').value)
  var message = document.getElementById('message').value
  var date = new Date()
  console.log('Message: ' + message)
  console.log('Date: ' + date.getMonth() + '/' + date.getDay() + 
  '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + 
  date.getMinutes() + ':' + date.getSeconds())
  event.preventDefault()
}