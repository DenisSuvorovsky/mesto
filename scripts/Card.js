const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


//Конструктор шаблона карточки
class Card {
    constructor (data, templateSelector) {
    this._name = data.name
    this._link = data.link;
    this._templateSelector = templateSelector;
    }

    //Клонирования разметки
    _getCardTemplate() {
        const template = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__card')
        .cloneNode('true')

        return template;
    }

    _openPopup(popup) {
      popup.classList.add('popup_opened');
      document.addEventListener('keydown', closeByEscBtn);
  }

    _closePopup(popup) {
      popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', closeByEscBtn);
}

  _closeByEscBtn(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
  }
    //
    _setEventListeners() {
      
    }
    
    //Создание карточки
    generateCard() {
        this._element = this._getCardTemplate();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__caption').textContent = this._name;

        return this._element;
    }

    //Удаление карточки
    _handleDeleteClick(evt) {
      const card = evt.target.closest('.elements__card');
      card.remove();
    }

    //Добавление/удаление лайка
    _handleLikeClick(evt) {
      evt.target.classList.toggle('elements__like_active');
  }
}


//добавление всех карточек в разметку
initialCards.forEach((item) => {
  const card = new Card(item, '.template');

  const cardElement = card.generateCard();
  const elementsList = document.querySelector('.elements');

  elementsList.prepend(cardElement);
});