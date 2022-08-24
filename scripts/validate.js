
const inputList = Array.from(document.querySelectorAll('.popup__input'));

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    popupSubmit: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

