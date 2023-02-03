const form = document.getElementById("form");
const login = document.getElementById("login");
const userName = document.getElementById("UserName");
const password = document.getElementById("Password");
const password2 = document.getElementById("Confirm Password");
const email = document.getElementById("Email");
let Container;

if (localStorage.getItem("Database") == null) {
  Container = [];
} else {
  Container = JSON.parse(localStorage.getItem("Database"));
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == "") {
      showError(input, `${input.id} Is Required`);
    } else if (!emailValidation(email.value)) {
      showError(email, "Email Is Not Valid");
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} Must Be At Least ${min} Characters`);
  } else if (input.value.length > max) {
    showError(input, `${input} Must Be At Most ${max} Characters`);
  } else {
    showSuccess(input);
  }
}

function identical(inputOne, inputTwo) {
  if (inputOne.value != inputTwo.value) {
    showError(inputTwo, "Password And Confirm Password Must be the same");
  } else {
    showSuccess(inputTwo);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-controls error";
  let small = formControl.querySelector(".alert");
  small.classList.replace("d-none", "d-block");
  small.innerText = message;
}

function showSuccess(input) {
  let formControl = input.parentElement;
  let small = formControl.querySelector(".alert");
  small.classList.replace("d-block", "d-none");
  formControl.className = "form-controls succuss";
}

function emailValidation(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

function addClient() {
  let user = {
    Username: userName.value,
    Email: email.value,
    Password: password.value,
  };
  Container.push(user);
  localStorage.setItem("Database", JSON.stringify(Container));
}

function Registration() {
  let Register = false;
  if (Register) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkRequired([userName, email, password, password2]);
      checkLength(userName, 3, 15);
      checkLength(password, 8, 15);
      identical(password, password2);
      addClient();
      Register = true;
    });
  }
  console.log("end " + Register);
  if (Register) {
    console.log(Register);
    window.open("index.html", "_self");
  }
}

Registration();
