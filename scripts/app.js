function showSigninForm() {
  signInLayout.style.display = "block";
}

document.querySelector(".sign_in").addEventListener("click", function (e) {
  if (e.target == signInLayout) {
    signInLayout.style.display = "none";
    console.log(e.target);
  }
});

function submitForm() {
  signInLayout.style.display = "none";
}

signInBtn.addEventListener("click", showSigninForm);
signInFormSubmitBtn.addEventListener("click", submitForm);
