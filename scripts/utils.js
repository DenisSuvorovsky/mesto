function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscBtn);
  }
  export default openPopup;