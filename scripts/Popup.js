import { ESC_KEY } from "./constants.js";
export default class Popup {
    constructor(popupSelector, { closeButtonSelector, activePopupClass }){
        this._popupElement = document.querySelector(popupSelector);
        this._closeButtonElement = this._popupElement.querySelector(closeButtonSelector);
        this._activePopupClass = activePopupClass;
        this._handleCloseButtonCLick =this._handleCloseButtonCLick.bind(this);
        this._handleCloseButtonCLick =this._handleCloseButtonCLick.bind(this);
        this._handleEscClick = this._handleEscClick.bind(this);
    }

    _handleCloseButtonCLick(){
        this.close();
    }

    _handleOverlayClick(evt){
        if (evt.target === this._popupElement) {
            this.close();
        }
    }

    _handleEscClick(evt){
        if (evt.key === ESC_KEY) {
            this.close();
        }
    }

    setEventListeners(){
        this._closeButtonElement.addEventListener('click', this._handleCloseButtonCLick);
        this._popupElement.addEventListener('click', this._handleOverlayClick);
    }

    open(){
        document.addEventListener('keydown', this._handleEscClick);
        this._popupElement.classList.add(this._activePopupClass);
    }

    close(){
        this._popupElement.classList.remove(this._activePopupClass);
        document.removeEventListener('keydown', this._handleEscClick);
    }
}
