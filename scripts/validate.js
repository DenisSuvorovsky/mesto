enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
});

const showInputError = (element) => {
    element.classList.add('form__input_type_error');
    // Показываем сообщение об ошибке
    formError.classList.add('form__input-error_active');
};


function hideError(form, input, config) {
    const error = form.querySelector(`.${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = '';
}

function validateInput(input, form, config) {
    const error = form.querySelector(`.${input.id}-error`);
    if (!input.validity.valid) {
        showError(form, input, config);
        error.classList.add(config.errorClass);
    } else {
        hideError(form, input, config);
    }
}

  function setHandlers(form, config) {
      const inputs = Array.from(form.querySelectorAll(config.inputSelector));
      inputs.forEach((input) => {
          input.addEventListener('input', () => {
              validateInput(input, form, config);
          })
      })
  }

function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
            setHandlers(form, config);
        })

  }



