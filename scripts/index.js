const popupClose = document.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const addProfileBtn = document.querySelector('.profile__add-btn');
const editProfilePopup = document.querySelector('.popup_type_edit');
const jobInput = document.querySelector('.popup__input_type_input-job');
const nameInput = document.querySelector('.popup__input_type_input-name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const cardName = addNewCardPopup.querySelector('.popup__input_type_card-name');
const cardSrc = addNewCardPopup.querySelector('.popup__input_type_card-src');
const addCardForm = addNewCardPopup.querySelector('.popup__form');
const popupList = document.querySelectorAll('.popup');
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

 //открытие поп-апа и перенос данных из разметки в форму
 editProfileBtn.addEventListener('click', () => {
  editProfilePopup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
})


//закрытие поп-апа
popupClose.addEventListener('click', () => {editProfilePopup.classList.remove('popup_opened');})


//изменение и сохранение данных из поп-апа
function formSubmitHandler(evt) {
    evt.preventDefault()
    userName.textContent = nameInput.value
    userJob.textContent = jobInput.value
    editProfilePopup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler);


//Вывод шаблона карточки на экран
const renderCards =  (item) => {
  const cardTemplate = document.querySelector('.template').content;
  const cardClone = cardTemplate.querySelector('.elements__card').cloneNode('true');
  const elementsList = document.querySelector('.elements');
  cardClone.querySelector('.elements__caption').textContent = item.name;
  cardClone.querySelector('.elements__image').src = item.link;
  cardClone.querySelector('.elements__image').alt =  item.name;
  elementsList.prepend(cardClone);
}

initialCards.forEach(function(item) {
  renderCards(item);
});

  
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupList.forEach((popup) =>  {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

addProfileBtn.addEventListener('click', () => {
addNewCardPopup.classList.add('popup_opened');
});

addCardForm.addEventListener('submit',function (evt) {
evt.preventDefault();
addNewCardPopup.classList.remove('popup_opened');
});

function createNewCard(name, link) {
  const template = document.querySelector('.template').content;
  const newElement = template.querySelector('.elements__card').cloneNode('true');
  const elementsList = document.querySelector('.elements');
  
}