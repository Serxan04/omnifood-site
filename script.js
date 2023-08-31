//button
const buttonMenu = document.querySelector(".button-menu");
const resp = document.querySelector(".resp");
buttonMenu.addEventListener("click", function () {
  resp.classList.toggle("hidden");
});

// email validation
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//form
const inputName = document.querySelector("#name");
const inputMail = document.querySelector("#mail");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputControl();
});

function inputControl() {
  const nameValue = inputName.value.trim();
  const emailValue = inputMail.value.trim();
  // test name
  if (nameValue === "") {
    errorDisplay(inputName, "User name can't be empty");
  } else {
    success(inputName);
  }
  //   test email
  if (emailValue === "") {
    errorDisplay(inputMail, "Mail boş ola bilməz");
  } else if (isValidEmail(emailValue) === false) {
    errorDisplay(inputMail, "Keçərli mail adresi qeyd edin");
  } else {
    success(inputMail);
  }
}

function errorDisplay(element, message) {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}
function success(element) {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
}
