const inputs = document.querySelectorAll('input');

const form = document.querySelector("form");

const names = document.getElementById("name");
const nameError = document.querySelector("#name + span.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector("#zip-code + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

// validating client side inputs

form.addEventListener('submit', (event)=> {
    if(names.value === ''){
        nameError.textContent = 'Name can not be blank';
        event.preventDefault();
    }   else   {
        nameError.textContent = '';
    }
    if (country.value === "") {
        countryError.textContent = "Country cannot be empty";
        event.preventDefault();
      } else {
        countryError.textContent = "";
      }
    
      // Validate Zip Code
      if (zipCode.value === "") {
        zipCodeError.textContent = "Zip Code cannot be empty";
        event.preventDefault();
      } else {
        zipCodeError.textContent = "";
      }
    
      // Validate Email
      if (email.value === "") {
        emailError.textContent = "Email cannot be empty";
        event.preventDefault();
      } else {
        emailError.textContent = "";
      }

      // Validate Password
      if (password.value === "") {
        passwordError.textContent = "Password cannot be empty";
        event.preventDefault();
      } else {
        passwordError.textContent = "";
      }
    
})