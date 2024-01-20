
const form = document.getElementById("internshipForm");


form.addEventListener("submit", function (event) {
  event.preventDefault(); 


  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const field = document.getElementById("field").value;
  const resume = document.getElementById("resume").value;

  
  if (fullName === "" || email === "" || phone === "" || field === "" || resume === "") {
    alert("Please fill in all fields");
    return;
  }

  

  
  const formData = {
    fullName,
    email,
    phone,
    field,
    resume,
  };

  
  console.log(formData);

 
  form.reset();
});
