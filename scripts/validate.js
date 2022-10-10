 const showInputError = (formSelector, inputSelector, config) => {
     const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
     //inputSelector.classList.add(config.inputErrorClass);
     errorElement.textContent = inputSelector.validationMessage;
     errorElement.classList.add(config.errorClass);
 };

 const hideInputError = (formSelector, inputSelector, config) => {
     const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
     //inputSelector.classList.remove(config.inputErrorClass);
     errorElement.classList.remove(config.errorClass);
     errorElement.textContent = '';
 };

 const checkInputValidity = (formSelector, inputSelector, config) => {
     if (!inputSelector.validity.valid) {
         showInputError(formSelector, inputSelector, config);
     } else {
         hideInputError(formSelector, inputSelector, config);
     }
 };

 const hasInvalidInput = (inputList, ) => {
     return inputList.some((inputSelector) => {
         return !inputSelector.validity.valid
     });
 };

 const toggleButtonState = (inputLust, buttonElement, config) => {
     const inputList = Array.from(document.querySelectorAll(config.inputSelector));
     if (hasInvalidInput(inputList)) {
         buttonElement.classList.add(config.inactiveButtonClass);
         buttonElement.setAttribute('disabled', true);
     } else {
         buttonElement.classList.remove(config.inactiveButtonClass);
         buttonElement.removeAttribute('disabled', true);
     }
 };

 const setEventListeners = (formSelector, config) => {
     const inputList = formSelector.querySelectorAll(config.inputSelector);
     const buttonElement = formSelector.querySelector(config.submitButtonSelector);
     toggleButtonState(inputList, buttonElement, config);
     inputList.forEach((inputSelector) => {
         inputSelector.addEventListener('input', () => {
             toggleButtonState(inputList, buttonElement, config);
             checkInputValidity(formSelector, inputSelector, config);
         });
     });
 };

 const enableValidation = (config) => {
     const fieldsetList = Array.from(document.querySelectorAll(config.fieldsetSelector));
     const formList = Array.from(document.querySelectorAll((config.formSelector)));
     formList.forEach((formSelector) => {
         formSelector.addEventListener('submit', (evt) => {
             evt.preventDefault();
             setEventListeners(formSelector, config);
         });
         fieldsetList.forEach((fieldset) => {
             setEventListeners(fieldset, config);
         });
     });
 };

 enableValidation({
     fieldsetSelector: '.popup__set',
     formSelector: '.popup__form',
     inputSelector: '.popup__input',
     submitButtonSelector: '.popup__submit',
     inactiveButtonClass: 'popup__submit_disabled',
     inputErrorClass: 'popup__input-error',
     errorClass: 'popup__input-error_active'
 });
