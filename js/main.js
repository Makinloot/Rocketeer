const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");

const SECTION2_NEXT_BTN = document.getElementById("section2__next-btn");
const SECTION3_NEXT_BTN = document.getElementById("section3__next-btn");

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

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const telephoneError = document.getElementById("telephone-error");

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

// const fromSairme = document.getElementById('from-sairme');
// const fromHome = document.getElementById('from-home');
// const hybrid = document.getElementById('hybrid');

// const contactCovidYes = document.getElementById('contact-covid-yes');
// const contactCovidNo = document.getElementById('contact-covid-no');

// const vaccinatedNo = document.getElementById('contact-covid-no');
// const contactCovidNo = document.getElementById('contact-covid-no');

// const validateCheckBox = (checkBox) => {
//   if(checkBox.checked) {
//     console.log('red');
//   } else {
//     console.log('black')
//     // return false;
//   }
// }

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

const url = "https://bootcamp-2022.devtest.ge/api/skills";
let skillBox = document.getElementById("skill-box");
let defaultOption = document.createElement("option");
defaultOption.text = "Skills";
skillBox.add(defaultOption);
// takes info from url and displays it in
// select element.
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const option = document.createElement("option");
      option.innerText = item.title;
      skillBox.append(option);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// creates chosen skills div and
// appends skills and experience value
// to it.
const createSkills = () => {
  const form = document.getElementById("skills-container");
  const skillBoxValue = document.getElementById("skill-box").value;
  const expBox = document.getElementById("exp-box").value;
  const createDiv = document.createElement("div");
  const skillsError = document.getElementById("skills-error");
  const skillContainer = document.getElementById("skills-container");
  const createDelete = document.createElement("div");

  if (skillBoxValue == "Skills" || expBox == "") {
    skillsError.innerText = "Please fill both forms";
  } else {
    skillsError.innerText = "";
    createDiv.classList.add("field__input", "skills__input");
    createDiv.innerText = skillBoxValue + ", Experience:" + " " + expBox;
    skillContainer.classList.add("skill-added");
    createDelete.innerText = "-";
    createDelete.classList.add("delete-skill", "flex");
    createDiv.append(createDelete);
  }
  deleteSkills(createDelete, createDiv);
  form.append(createDiv);
};

// removes chosen skills div.
const deleteSkills = (remove, item) => {
  remove.addEventListener("click", () => {
    item.remove();
  });
};

// allows to move from section 3 to section 4,
// if at least 1 skill is chosen.
const allowNextPage2 = () => {
  const skillContainer = document.getElementById("skills-container");
  const skillsError = document.getElementById("skills-error");

  if (skillContainer.classList.contains("skill-added")) {
    skillsError.innerText = "";
    SECTION3_NEXT_BTN.addEventListener("click", changePage(section3, section4));
  } else {
    skillsError.innerText = "Please fill both forms";
  }
};

const fromSairme = document.getElementById('from-sairme');
const fromHome = document.getElementById('from-home');
const hybrid = document.getElementById('hybrid');
const contactYes = document.getElementById("contact-covid-yes");
const contactNo = document.getElementById("contact-covid-no");
const vaccinatedYes = document.getElementById("vaccinated-yes");
const vaccinatedNo = document.getElementById("vaccinated-no");
const contactDate = document.getElementById("contact-date");
const vaccineDate = document.getElementById("vaccine-date");

contactYes.addEventListener("click", () => {
  if (contactYes.checked) {
    contactDate.style.display = "flex";
  }
});
contactNo.addEventListener("click", () => {
  if (contactNo.checked) {
    contactDate.style.display = "none";
  }
});

vaccinatedYes.addEventListener("click", () => {
  if (vaccinatedYes.checked) {
    vaccineDate.style.display = "flex";
  }
});
vaccinatedNo.addEventListener("click", () => {
  if (vaccinatedNo.checked) {
    vaccineDate.style.display = "none";
  }
});

if(fromSairme.checked || fromHome.checked || hybrid.checked &&
    contactYes.checked || contactNo.checked && vaccinatedYes.checked || vaccinatedNo.checked) {
      console.log('red');
    }