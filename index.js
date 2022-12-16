// while typing validate the form and show message
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");
const repassword = document.querySelector("input[name='repassword']");
const fullname = document.querySelector("input[name='fullname']");
const form = document.getElementById('form');
const emailregx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
const nameregx = /^[a-zA-Z]+$/;

form.addEventListener('submit', function(event){
  
  //Email Validation
  if (email.value === '' || !emailregx.test(email.value)) {
    email.parentElement.classList.add('form-field-error');
    alert("Please enter a valid email address..");
  } else {
    email.parentElement.classList.remove('form-field-error');
  }
  
  //Password Validation
  if (password.value === '') {
    password.parentElement.classList.add('form-field-error');
    alert("password cannot be blank");
    
  } else {
    password.parentElement.classList.remove('form-field-error');
  }

  //Re-Password Validation
  if (repassword.value === '' || password.value != repassword.value) {
        repassword.parentElement.classList.add('form-field-error');
        alert("password does not match");
        
  } else {
        repassword.parentElement.classList.remove('form-field-error');
  }

  // Name Validation
   if(fullname.value === '' || !nameregx.test(fullname.value)){
    fullname.parentElement.classList.add('form-field-error');
    alert("Please enter a valid name..");
   } else{
    fullname.parentElement.classList.remove('form-field-error');
   }

  event.preventDefault();
});



