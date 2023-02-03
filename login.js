let loginEmail = $("#exampleInputEmail1");
let loginPassword = $("#pass");
// let incorrectLabel = $("#incorrectLabel");
let loginRequiredLabel = $("#loginRequiredLabel");
// let loginRequiredLabel2 = $("#loginRequiredLabel2");
let loginBtn = $("#loginBtn");

let Container;

if (localStorage.getItem("Database") == null) {
  Container = [];
} else {
  Container = JSON.parse(localStorage.getItem("Database"));
}

loginBtn.on("click", (e) => {
  e.preventDefault();
  logIn();
});

function checkLoginFilling() {
  if (loginEmail.val().trim() == "" || loginPassword.val().trim() == "") {
    loginRequiredLabel.removeClass("d-none").addClass("d-block");
    return false;
  } else {
    loginRequiredLabel.removeClass("d-block").addClass("d-none");
    return true;
  }
}

function logIn() {
  let logincheck = false;
  let uname = "";
  if (checkLoginFilling()) {
    for (let i = 0; i < Container.length; i++) {
      if (
        Container[i].Email == loginEmail.val() &&
        Container[i].Password == loginPassword.val()
      ) {
        console.log(Container[i].userEmail);
        logincheck = true;
        uname = Container[i].Username;
        break;
      }
    }

    if (logincheck) {
      sessionStorage.setItem("newUser", uname);
      window.open("index.html", "_self");
    }
  }
}
