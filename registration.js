const registrationForm = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const contact = document.getElementById('contact').value;
  const gender = document.getElementById('gender').value;
  const country = document.getElementById('country').value;
  const state = document.getElementById('state').value;

  
  if (name.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '' || contact.trim() === '' || gender === '' || country.trim() === '' || state.trim() === '') {
    errorMessage.textContent = 'Please fill in all fields.';
  } else {
    
    alert('Registration successful!');
  }
});
