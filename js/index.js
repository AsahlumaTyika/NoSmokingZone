try {

  const email = document.getElementById('email');
  const form = document.getElementById('form');
  const p = document.getElementById('smallerror');
  const srch = document.getElementById('srch')

  function showError(input, message) {
    formControl = input.parentElement;
    formControl.className = "form-control error";

    p.innerHTML = message;
    p.className = "smallerror vis";
  }

  function showSucess(input) {
    formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  function checkEmail() {
    if (email.value == "") {
      showError(email, "Email required!");
    } else {
      showSucess(email);
    }
  }

  function btnJoinSubmitEvent() {
    checkEmail();
    alert("Still under development!");
  }

  function uDev() {
    alert("Still under development!");
  }
}catch(e) {
  alert(e);
}