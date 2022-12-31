//Класс и шаблон карточки
export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._image = link;
    this._templateSelector = templateSelector;
  }

   _handleLikeClick() {
     this._like.classList.toggle("elements__like_active");
   }
 
   _handleDeleteClick() {
     this._element.remove();
   }

  // _handleCardClick() {
  //   this._image
  // }
  
  _setEventListeners() {
    this._like.addEventListener("click", () => {
      this._handleLikeClick();
    })
      this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    })
    
  //  this._image.addEventListener('click', () => {
  //    this._handleCardClick();
  //  })
  }

  //Клонирования разметки
  _getCardTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode("true");
    return template;
  }


  //Создание карточки
  generateCard() {
    this._element = this._getCardTemplate();
    this._element.querySelector(".elements__image").src = this._image;
    this._element.querySelector(".elements__caption").textContent = this._name;
    this._element.querySelector(".elements__image").alt = this._name;
    this._like = this._element.querySelector(".elements__like");
    this._setEventListeners();
    return this._element;
  }

}
