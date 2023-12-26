let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let userMessage = document.querySelector("#userMessage");
let patternMessage = document.querySelector("#patternMessage");
let LoginBtn = document.querySelector("#LoginBtn");

let infoContainer = [];
let loginedUser = []; //temp array 3ashn a5zn feha el user name[i] ely da5l w bttms7 b3d ma ye3ml logout mn page el home

if (localStorage.getItem("userInfo") != null) {
  infoContainer = JSON.parse(localStorage.getItem("userInfo"));
}


let regex =/^[a-zA-Z0-9\._-]{1,}@[a-zA-Z]{1,}\.[a-zA-Z]{3}$/;

emailInput.addEventListener("blur", function () {
  if (regex.test(emailInput.value)) {
    emailInput.classList.remove("is-invalid");
    patternMessage.innerHTML = "";
  } else {
    emailInput.classList.add("is-invalid");
    patternMessage.innerHTML =
      "Please Enter Valid Email ex:(xyz***@gmail.com )";
  }
});

let valid = 0;
LoginBtn.addEventListener("click", function () {
  if (emailInput.value == "" || passwordInput.value == "") {
    userMessage.innerHTML = "All Inputs Required";
  } else if (emailInput.value != "" || passwordInput.value != "") {
    for (let i = 0; i < infoContainer.length; i++) {
      if (
        emailInput.value == infoContainer[i].email &&
        passwordInput.value == infoContainer[i].pass &&
        regex.test(emailInput.value) == true
      ) {
        document.location.href = "./pages/home.html";
        loginedUser.push(infoContainer[i].name);
        localStorage.setItem("accepted", JSON.stringify(loginedUser)); //a3ml new key fel localstorge a5zn feh esm user el m2bol
        valid = 1;
        clear();
      }
    }
  }
  if (valid == 0 && emailInput.value != "" && passwordInput.value != "") {
    userMessage.innerHTML = "invalid email or password";
  }
});

function clear() {
  emailInput.value = "";
  passwordInput.value = "";
}
