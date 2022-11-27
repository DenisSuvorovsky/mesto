
export default (function () {
    class FormValidator {
        constructor (validationConfig, formSelector) {
            this._config = validationConfig;
            this._formSelector = formSelector;
            this._inputs = Array.from(this._formSelector.querySelectorAll(_config.inputSelector));
            this._submitBtn =  this._formSelector.querySelector(this._config.submitButtonSelector);
            this._inputError = this._formSelector.querySelectorAll(this._config.errorClass);
        }

        _showError(inputSelector, errorMessage) {
            const { errorClass, inputErrorClass } = this._config;
            const errorElement = this._getErrorElement(inputSelector);
            errorElement.textContent = errorMessage;
            errorElement.classList.add(errorClass);
            inputSelector.classList.add(inputErrorClass);
        }
    }

})();
