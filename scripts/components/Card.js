//Класс и шаблон карточки
export default class Card {
    constructor({name, link}, templateSelector, cardConfig, {openImageHandler}) {
      this._name = name;
      this._config = cardConfig;
      this._image = link;
      this._templateSelector = templateSelector;
      this._activeLikeClass = cardConfig.activeLikeClass;
      this._handleOpenImage = openImageHandler;
      this._handleLikeClick = this._handleLikeClick.bind(this);
      this._handleDeleteClick = this._handleDeleteClick.bind(this);
      this._handleCardClick = this._handleCardClick.bind(this);
    }
  
    //Клонирования разметки
    _makeCardElement() {
      const { likeButtonSelector, deleteButtonSelector, imageSelector, captionSelector } = this._config;
       this._cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(".elements__card")
        .cloneNode("true");
        this._likeButtonElement = this._cardElement.querySelector(likeButtonSelector);
        this._deleteButtonElement = this._cardElement.querySelector(deleteButtonSelector);
        this._imageElement = this._cardElement.querySelector(imageSelector);
        this._captionElement = this._cardElement.querySelector(captionSelector);
    }

    _fillCardInfo() {
      this._imageElement.src = this._image;
      this._captionElement.textContent = this._name;
      this._imageElement.alt = this._name;
    }

    _handleLikeClick() {
      this._likeButtonElement.classList.toggle(this._activeLikeClass);
    }
  
    _handleDeleteClick() {
      this._cardElement.remove();
    }

    _handleCardClick() {
     this._handleOpenImage({name: this._name, link: this._image});
    }
    

    _setEventListeners() {
      this._likeButtonElement.addEventListener("click", this._handleLikeClick);
      this._deleteButtonElement.addEventListener('click', this._handleDeleteClick);
      this._imageElement.addEventListener('click', this._handleCardClick);
    }
    
    //Создание карточки
    generateCard() {
      this._makeCardElement();
      this._fillCardInfo();
      this._setEventListeners();
      return this._cardElement;
    }

  }