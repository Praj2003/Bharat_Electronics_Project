const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    successMessage.textContent = 'Please fill in all fields.';
  } else {
   
    setTimeout(function() {
      
      contactForm.reset();

     
      successMessage.textContent = 'Message sent successfully!';
    }, 1500);
  }
});

