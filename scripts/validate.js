 const showInputError = (formElement, inputElement, errorMessage) => {
     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
     inputElement.classList.add('form__input_type_error');
     errorElement.textContent = errorMessage;
     errorElement.classList.add('form__input-error_active');
 };

 const hideInputError = (formElement, inputElement) => {
     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
     inputElement.classList.remove('form__input_type_error');
     errorElement.classList.remove('form__input-error_active');
     errorElement.textContent = '';
 };

 const checkInputValidity = (formElement, inputElement) => {
     if (!inputElement.validity.valid) {
         showInputError(formElement, inputElement, inputElement.validationMessage);
     } else {
         hideInputError(formElement, inputElement);
     }
 };

 const hasInvalidInput = (inputList) => {
     return inputList.some((inputElement) => {
         return !inputElement.validity.valid
     })
 };

 const toggleButtonState = (inputList, buttonElement, config) => {
     if (hasInvalidInput(inputList)) {
         buttonElement.classList.add(config.inactiveButtonClass);
     } else {
         buttonElement.classList.remove(config.inactiveButtonClass);
     }
 };

 const setEventListeners = (formSelector,config) => {
     const inputList = Array.from(formSelector.querySelectorAll(config.formSelector));
     const buttonElement = formSelector.querySelector('.form__submit');
     toggleButtonState(inputList, buttonElement);
     inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function () {
             toggleButtonState(inputList, buttonElement);
             checkInputValidity(formSelector, inputElement);
         });
     });
 };

 const enableValidation = (config) => {
     const formList = Array.from(document.querySelectorAll(config.formSelector));
     formList.forEach((formSelector) => {
         formSelector.addEventListener('submit', function (evt) {
             evt.preventDefault();
         });

         const fieldsetList = Array.from(formSelector.querySelectorAll(config.fieldsetSelector));
         fieldsetList.forEach((fieldset) => {
             setEventListeners(fieldset);
         });

         //setEventListeners(formElement);
     });
 };

 enableValidation({
     fieldsetSelector: '.popup_set',
     formSelector: '.popup__form',
     inputSelector: '.popup__input',
     submitButtonSelector: '.popup__submit',
     inactiveButtonClass: 'popup__submit_disabled',
     inputErrorClass: 'popup__input-error',
     errorClass: 'popup__input-error_active'
 })