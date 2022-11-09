validationConfig({
    fieldsetSelector: '.popup__set',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
});


class Form {
    constructor (data, Selector) {
        this._name = data.name;
        this._inputs = data.inputs;
        this._Selector = Selector;
    }


}