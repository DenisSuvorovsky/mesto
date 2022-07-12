const popupClose = document.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const addProfileBtn = document.querySelector('.profile__add-btn');
const popup = document.querySelector('.popup');
const jobInput = document.querySelector('.popup__input_type_input-job');
const nameInput = document.querySelector('.popup__input_type_input-name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
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
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
})


//закрытие поп-апа
popupClose.addEventListener('click', () => {popup.classList.remove('popup_opened');})


//изменение и сохранение данных из поп-апа
function formSubmitHandler(evt) {
    evt.preventDefault()
    userName.textContent = nameInput.value
    userJob.textContent = jobInput.value
    popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler);


//Вывод шаблона карточки на экран
const renderCard =  () => {
  const cardTemplate = document.querySelector('.template').content;
  const cardClone = cardTemplate.querySelector('.elements__card').cloneNode('.true');
  const elementsList = document.querySelector('.elements');
  cardClone.querySelector('.elements__caption').textContent = 'Байкал';
  cardClone.querySelector('.elements__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
  elementsList.prepend(cardClone);
}
renderCard();

initialCards.forEach(function(item) {

})
