const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const telephoneError = document.getElementById("telephone-error");

const SECTION2_NEXT_BTN = document.getElementById("section2__next-btn");

// displays current page as 'none' and
// next page as 'grid', but displays
// starting page as 'flex'
const changePage = (currentPage, prevPage) => {
  currentPage.style.display = "none";
  if (prevPage == section1) {
    prevPage.style.display = "flex";
  } else {
    prevPage.style.display = "grid";
  }
};

// checks and validates input forms
const validateInputs = (input, inputError) => {
  if (!input.validity.valid) {
    inputError.innerText = "Fill form correctly";
    if (input.validity.typeMismatch) {
      inputError.innerText = "Enter correct E-Mail";
    } else if (input.validity.tooShort) {
      inputError.innerText = "Form too short";
    } else {
      inputError.innerText = "Required field";
    }
    return false;
  } else {
    inputError.innerText = "";
    return true;
  }
};

// allows to move on next page,
// after checking input validations.
const allowNextPage = () => {
  const validName = validateInputs(firstName, firstNameError);
  const validSurname = validateInputs(lastName, lastNameError);
  const validEmail = validateInputs(email, emailError);

  if (validName && validSurname && validEmail) {
    SECTION2_NEXT_BTN.addEventListener("click", changePage(section2, section3));
  }
};
