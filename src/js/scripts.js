(function () {
  const form = document.querySelector('form'),
    emailInput = document.querySelector('#email'),
    emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    errorMessage = document.querySelector('#error');

  const validateEmail = email => emailRegex.test(email);

  form.addEventListener(
    'submit',
    event => {
      event.preventDefault();

      const isValid = validateEmail(emailInput.value);

      if (isValid) {
        emailInput.classList.remove('input-error');
        errorMessage.innerHTML = '';
        alert('Email submitted');
      } else {
        emailInput.classList.add('input-error');
        errorMessage.innerHTML = 'Please provide a valid email';

        emailInput.focus();
        emailInput.value = '';
      }
    },
    false
  );
})();
