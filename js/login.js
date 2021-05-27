const mobileForm = document.querySelector("#mobile-form");
const desktopForm = document.querySelector("#desktop-form");

const mobileEmail = document.querySelector("#mobile-email");
const mobileEmailError = document.querySelector("#mobile-email-error");
const mobilePassword = document.querySelector("#mobile-password");
const mobilePasswordError = document.querySelector("#mobile-password-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

const mobileCheckSymbol1 = document.querySelector(".mobile-checksymbol1");
const mobileCheckSymbol2 = document.querySelector(".mobile-checksymbol2");

const checkSymbol1 = document.querySelector(".checksymbol1");
const checkSymbol2 = document.querySelector(".checksymbol2");

const mobileEnter = document.querySelector(".login-photo-4");
const enter = document.querySelector(".login-photo-3");

function checkMobileLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
function validateMobileEmail(mobileEmail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(mobileEmail);
  return patternMatches;
}

function checkMobileSign(event) {
  if (validateMobileEmail(mobileEmail.value)) {
    mobileCheckSymbol1.style.display = "inline";
  }
  if (checkMobileLength(mobilePassword.value, 7)) {
    mobileCheckSymbol2.style.display = "inline";
  }
}

function validateMobileForm(event) {
  event.preventDefault();
  if (validateMobileEmail(mobileEmail.value)) {
    mobileEmailError.style.display = "none";
  } else {
    mobileEmailError.style.display = "block";
  }
  if (checkMobileLength(mobilePassword.value, 7)) {
    mobilePasswordError.style.display = "none";
  } else {
    mobilePasswordError.style.display = "block";
  }
}

function submitMobileForm(event) {
  if (
    checkMobileLength(mobilePassword.value, 7) &&
    validateMobileEmail(mobileEmail.value)
  ) {
    event.preventDefault;
    window.location.replace("notes.html");
  }
}
mobileEnter.addEventListener("click", validateMobileForm);
mobileEnter.addEventListener("click", submitMobileForm);
mobileForm.addEventListener("keyup", checkMobileSign);

// Desktop

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkSign(event) {
  if (validateEmail(email.value)) {
    checkSymbol1.style.display = "inline";
  }
  if (checkLength(password.value, 7)) {
    checkSymbol2.style.display = "inline";
  }
}

function validateForm(event) {
  event.preventDefault();
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(password.value, 7)) {
    passworderror.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}

function submitForm(event) {
  if (checkLength(password.value, 7) && validateEmail(email.value)) {
    event.preventDefault;
    window.location.replace("notes.html");
  } else {
  }
}

enter.addEventListener("click", validateForm);
enter.addEventListener("click", submitForm);
desktopForm.addEventListener("keyup", checkSign);
