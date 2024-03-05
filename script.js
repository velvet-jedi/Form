const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs(input);
    });
});


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

const confirm_password = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");

// validating client side inputs

form.addEventListener('submit', (event)=> {
    event.preventDefault(); // Prevent default form submission
    
    validateInputs();
})

const setError = (el, message) => {
    const inputContainer = el.parentElement;
    const errorDisplay = inputContainer.querySelector('.error');

    errorDisplay.innerText = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

const setSuccess = el => {
    if (!el || !el.parentElement) {
        return; // Exit if element or its parent is null
      }
    const inputContainer = el.parentElement;
    const errorDisplay = inputContainer.querySelector('.error') || inputContainer.querySelector('.success') ;
    

    errorDisplay.innerText = '';
    errorDisplay.classList.add('success');
    errorDisplay.classList.remove('error');
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
    
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {

    const unameValue = names.value.trim();
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirm_password.value.trim();

    if(unameValue === ''){
        setError(names, 'Name is required');
    }   else   {
        setSuccess(names);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }   
    else   {
        setSuccess(email);
    }

    if(countryValue === ''){
        setError(country, 'Country is required');
    }   else   {
        setSuccess(country);
    }

    if(zipCodeValue === ''){
        setError(zipCode, 'Zip Code is required');
    }   else   {
        setSuccess(zipCode);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }   else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else   {
        setSuccess(password);
    }

    if(confirmPasswordValue === ''){
        setError(confirm_password, 'Enter matching password to confirm');
    }   else if (confirmPasswordValue !== passwordValue) {
        setError(confirm_password, 'Enter matching password to confirm');
    }   else {
        setSuccess(confirm_password);
    }

    

}