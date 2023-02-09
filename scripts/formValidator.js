export default class FormValidator {
	constructor ({ errorClass, inputErrorClass, inputSelector, submitButtonSelector, inactiveButtonClass }, formElement) {
	this._errorClass = errorClass;
	this._inactiveButtonClass = inactiveButtonClass;
	this._inputErrorClass = inputErrorClass;
  	this._formElement = formElement;
  	this._inputs = Array.from(this._formElement.querySelectorAll(inputSelector));
  	this._submitBtn =  this._formElement.querySelector(submitButtonSelector);
 } 
  _showError(inputElement, errorMessage) {
  	const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  	errorElement.textContent = errorMessage;
  	errorElement.classList.add(this._errorClass);
  	inputElement.classList.add(this._inputErrorClass);
 }
 _hideError(inputElement){
	const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.textContent = '';
  	errorElement.classList.remove(this._errorClass);
  	inputElement.classList.remove(this._inputErrorClass);
 }

 _checkInput(inputElement){
	if (!inputElement.validity.valid) {
		this._showError(inputElement, inputElement.validationMessage);
	} else {
		this._hideError(inputElement);
	}
 }

 _hasInvalidInput() {
	return this._inputs.some((input) => {
		return (!input.validity.valid);
	});
 }

 _toggleButtonState(){
	debugger;
	if (this._hasInvalidInput()) {
		this._submitBtn.classList.add(this._inactiveButtonClass);
		this._submitBtn.disabled = true;
	} else {
		this._submitBtn.classList.remove(this._inactiveButtonClass);
		this._submitBtn.disabled = false;
	}
 }

 _handleValidateInput(evt){
	console.dir(evt.target);
	debugger;
	this._checkInput(evt.target);
	this._toggleButtonState();
 }

 enableValidation(){
	
	
	this._inputs.forEach((input) => {
		input.addEventListener('input', this._handleValidateInput.bind(this));
	});
	this._toggleButtonState();
	
 }

 validateForm(){
	this._inputs.forEach((input) => {
		if (!!input.value) {
			this._checkInput(input);
		} else {
			this._hideError(input);
		}
	});
	this._toggleButtonState();
 }

}

