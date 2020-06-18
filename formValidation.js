const browser = window.browser || window.chrome;
const form = document.querySelector("#gform");
const iframe = document.querySelector("#hidden_iframe");
const name = document.getElementById("entry.2005620554");
const email = document.getElementById("entry.1045781291");
const textarea = document.getElementById("entry.1318743030");
const submitButton = document.getElementById("submit");
let submitted = false;
init();

function init() {
  checkInputs(name, checkLength);
  checkInputs(textarea, checkLength);
  checkInputs(email, checkEmail);
}

submitButton.addEventListener("click", ana);
submitButton.addEventListener("submit", () => {});

function ana() {
  const name = document.getElementById("entry.2005620554");
  const email = document.getElementById("entry.1045781291");
  const textarea = document.getElementById("entry.1318743030");

  elementsArr = [name, email, textarea];
  let counter = 0;
  elementsArr.forEach((element) => {
    if (element.className === "valid") {
      counter++;
    } else {
      console.log("there is some inputs that are not valid ");
    }
  });

  if (counter === 3) {
    form.setAttribute("onsubmit", `${!submitted}`);
    iframe.setAttribute("onload", `${!submitted}`);
    form.style.opacity = "0";
    form.style.height = "0";

    const cForm = document.querySelector(".contact__form");

    cForm.style.height = "100%";

    setTimeout(() => {
      form.style.display = "none";
      cForm.appendChild(createMessage("succses"));
    }, 100);
  }
}

function checkLength(length, value) {
  if (value && value >= length) {
    // e.target.style.border = "2px solid green";
    console.log(true);
    return true;
  } else {
    // e.target.style.border = "1px solid red";
    console.log(false);
    return false;
  }
}

function checkEmail(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(value).toLowerCase());
}

function checkInputs(input, innerFunction) {
  let value;

  input == name ? (value = 3) : (value = 10);

  input.addEventListener("input", (e) => {
    targetValue = e.target.value;

    if (input == email) {
      if (innerFunction(targetValue)) {
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
      }
    } else {
      if (innerFunction(value, targetValue.length)) {
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
      }
    }
  });
}

function createMessage(text) {
  let message = document.createElement("div");
  message.className = "success__message";
  message.innerHTML = text;

  return message;
}
