(function() {

  const form = document.querySelector("form"),
    emailInput = document.querySelector("#email"),
    emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    errorMessage = document.querySelector("#error");


  const validateEmail = email => emailRegex.test(email);

  form.addEventListener("submit", event => {
    event.preventDefault();

    let isValid = validateEmail(emailInput.value);

    if (isValid) {
      emailInput.classList.remove("input-error");
      form.submit();
    } else {
      emailInput.classList.add("input-error");
      emailInput.style.backgroundImage = 'url(src/images/icon-error.svg)';
      emailInput.style.backgroundRepeat = 'no-repeat';
      emailInput.style.backgroundPosition = '75% 50%';

      errorMessage.innerHTML = "Please provide a valid email";

      emailInput.focus();
      emailInput.value = "";
    }

  }, false);

})();