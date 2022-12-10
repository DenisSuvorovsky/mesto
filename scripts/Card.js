  const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
  
  //Конструктор шаблона карточки
  export default class Card {
    constructor(data, name, link, templateSelector) {
      this._data = data;
      this._name = name;
      this._image = link;
      this._templateSelector = templateSelector;
    }
  
    _handleLikeClick() {
      this._like.classList.toggle("elements__like_active");
    };
  
    _handleDeleteClick() {
      this._element.remove();
    };
  
    _setEventListeners() {
      this._like.addEventListener("click", () => {
        this._handleLikeClick();
      });
        this._element.querySelector('.elements__delete').addEventListener('click', () => {
        this._handleDeleteClick();
      });
    };
  
    //Клонирования разметки
    _getCardTemplate() {
      const template = document
        .querySelector(this._templateSelector)
        .content.querySelector(".elements__card")
        .cloneNode("true");
      return template;
    };
  
    //Создание карточки
    generateCard() {
      this._element = this._getCardTemplate();
      this._element.querySelector(".elements__image").src = this._image;
      this._element.querySelector(".elements__caption").textContent = this._name;
      this._like = this._element.querySelector(".elements__like");
      this._setEventListeners();
      return this._element;
    }
  };
  
  //добавление массива карточек в разметку
  initialCards.forEach((item) => {
    const card = new Card(item, item.name, item.link, ".template");
    const cardElement = card.generateCard();
    const elementsList = document.querySelector(".elements");
    elementsList.prepend(cardElement);
  });
  
