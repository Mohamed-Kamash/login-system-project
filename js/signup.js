let signUpNameInput = document.querySelector("#signUpNameInput");
let signUpEmailInput = document.querySelector("#signUpEmailInput");
let signUpPasswordInput = document.querySelector("#signUpPasswordInput");
let SignUpBtn = document.querySelector("#SignUpBtn");
let signUpMessage = document.querySelector("#signUpMessage");

let infoContainer = [];

if (localStorage.getItem("userInfo") != null) {
  infoContainer = JSON.parse(localStorage.getItem("userInfo"));
}

function createNewUser() {
  let newUser = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    pass: signUpPasswordInput.value,
  };
  infoContainer.push(newUser);
  localStorage.setItem("userInfo", JSON.stringify(infoContainer));
  clear();
  document.location.href = "../index.html";
}

function clear() {
  signUpNameInput.value = "";
  signUpEmailInput.value = "";
  signUpPasswordInput.value = "";
}


let regex = /^[a-zA-Z0-9\._-]{1,}@[a-zA-Z]{1,}\.[a-zA-Z]{3}$/;

signUpEmailInput.addEventListener("blur", function () {
  if (regex.test(signUpEmailInput.value)) {
    signUpEmailInput.classList.remove("is-invalid");
    patternMessage.innerHTML = "";
  } else {
    signUpEmailInput.classList.add("is-invalid");
    patternMessage.innerHTML ="invalid email type ex:(xyz@gmail.com)";
  }
});

let checkresult = null;
SignUpBtn.addEventListener("click", function () {
  if (
    signUpNameInput.value == "" ||
    signUpEmailInput.value == "" ||
    signUpPasswordInput.value == ""
  ) {
    signUpMessage.innerHTML = "Please Fill All Inputs";
  } else if (infoContainer.length == 0 && regex.test(signUpEmailInput.value)) {
    createNewUser();
  } else if (infoContainer.length > 0) {
    for (let i = 0; i < infoContainer.length; i++) {
      if (signUpEmailInput.value == infoContainer[i].email) {
        signUpMessage.innerHTML = "This Email Already In Use";
        checkresult = 1;
        clear();
      }
    }
  }
  if (
    checkresult != 1 &&
    signUpNameInput.value != "" &&
    signUpEmailInput.value != "" &&
    signUpPasswordInput.value != "" &&
    regex.test(signUpEmailInput.value)==true
  ) {
    createNewUser();
  }
});
