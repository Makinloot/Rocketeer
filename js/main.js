const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const telephoneError = document.getElementById('telephone-error');

// checks inputs and if valid allows to change page
// otherwise returns input errors.
const changePage = (currentPage, nextPage) => {
    const isValidName = document.getElementById('first-name').value;
    const isValidLastName = document.getElementById('last-name').value;
    const isValidemail = document.getElementById('email').value;

    if(!isValidName || !isValidLastName || !isValidemail) {
        validateInputs(firstName, firstNameError);
        validateInputs(lastName, lastNameError);
        validateInputs(email, emailError);
    } else {
        currentPage.style.display = 'none';
        nextPage.style.display = 'grid';
    }
}

// allows to return on previous page without
// validating input forms.
const previousPage = (currentPage, prevPage) => {
    currentPage.style.display = 'none';
    prevPage.style.display = 'grid';
}

// checks and validates input forms
const validateInputs = (input, inputError) => {
    if(!input.validity.valid) {
        inputError.innerText = 'Fill form correctly';
    }
    if(input.validity.valueMissing) {
        inputError.innerText = 'Required  field';
    }
    if(input.validity.tooShort) {
        inputError.innerText = 'Form value too short';
    }
    if(input.validity.typeMismatch) {
        inputError.innerText = 'Enter correct E-Mail';
    }
    if(input.validity.valid) {
        inputError.innerText = '';
    }
}