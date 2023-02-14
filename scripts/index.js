import FormValidator from './formValidator.js';
import { cardConfig } from "./constants.js";
import Card from './Card.js';
import { initialCards, validationConfig } from './constants.js';

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
const popupCardImage = document.querySelector('.popup_type_image');
const viewPopupImage = popupCardImage.querySelector('.popup__img');
const viewPopupName = popupCardImage.querySelector('.popup__caption');

const validators = {};
Array.from(document.forms).forEach((form) => {
  validators[form.id] = new FormValidator(validationConfig, form);
  validators[form.id].enableValidation();
})

//изменение имении и работы профиля
function handleSubmitProfileEditForm (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

//открытие поп-апа
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscBtn);
}

//закрытие поп-апа
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscBtn);
}


//открытие поп-апа с изображением
function openViewPopup(card) {
  const {name, link} = card;
  viewPopupImage.src = link;
  viewPopupImage.alt = name;
  viewPopupName.textContent = name;
  openPopup(popupCardImage);
}

//Добавление карточки
function addNewCard(name, link) {
  const card = new Card({ name, link }, '.template', cardConfig, { openImageHandler: openViewPopup });
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
} 


//добавление массива карточек в разметку
initialCards.forEach((item) => {
  addNewCard(item.name, item.link, '.template');
})

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

function addEventListeners() {

  profileAddBtn.addEventListener('click', () => {
      openPopup(popupAddNewCard);
      formAddCard.reset();
      validators[formAddCard.id].validateForm();
      

  });

  formAddCard.addEventListener('submit', (evt) => {   
      closePopup(popupAddNewCard);
      evt.preventDefault();
      addNewCard(cardName.value, cardSrc.value);
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
