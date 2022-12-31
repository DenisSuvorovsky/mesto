import Card from './Card.js';
import FormValidator from './formValidator.js';

const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupEditProfile = document.querySelector('.popup_type_edit');
const jobInput = document.querySelector('.popup__input_type_input-job');
const nameInput = document.querySelector('.popup__input_type_input-name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const formAddCard = popupAddNewCard.querySelector('.popup__form_type_add-card');
const cardName = formAddCard.querySelector('.popup__input_type_card-name');
const cardSrc = formAddCard.querySelector('.popup__input_type_card-srс');
const popupList = document.querySelectorAll('.popup');
const elementsList = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_type_image');
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

//Добавление карточки
function addNewCard(name, link) {
  const card = new Card(name, link, '.template');
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
} 

//добавление массива карточек в разметку
initialCards.forEach((item) => {
  addNewCard(item.name, item.link, '.template');
})
  
function handleSubmitProfileEditForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscBtn);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscBtn);
}

popupList.forEach ((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      };
      if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
      };
  });
})

function closeByEscBtn (evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function handleCardClick() {
  elementsList.addEventListener('click', () => {
    openPopup(popupCard);
  })
}

function addEventListeners() {

  elementsList.addEventListener('click', () => {
    handleCardClick();
  })

  profileAddBtn.addEventListener('click', () => {
      openPopup(popupAddNewCard);
      formAddCard.reset();
  });

  formAddCard.addEventListener('submit', (evt) => {   
      evt.preventDefault();
      addNewCard(cardName.value, cardSrc.value);
      closePopup(popupAddNewCard);
      formAddCard.reset();
  });

  profileEditBtn.addEventListener('click', () => {      
      openPopup(popupEditProfile);
      nameInput.value = userName.textContent;
      jobInput.value = userJob.textContent;
  });
    formEditProfile.addEventListener('submit', handleSubmitProfileEditForm);
}

addEventListeners();