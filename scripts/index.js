const popupClose = document.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile__edit-btn');
const addProfileBtn = document.querySelector('.profile__add-btn');
const editProfilePopup = document.querySelector('.popup_type_edit');
const jobInput = document.querySelector('.popup__input_type_input-job');
const nameInput = document.querySelector('.popup__input_type_input-name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form_type_profile-edit');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = addNewCardPopup.querySelector('.popup__form_type_add-card');
const cardName = addCardForm.querySelector('.popup__input_type_card-name');
const cardSrc = addCardForm.querySelector('.popup__input_type_card-src');
const popupList = document.querySelectorAll('.popup');
const likeButton = document.querySelector('.elements__like');
const deleteButton = document.querySelectorAll('.elements__delete');
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

function handleDeleteClick(evt) {
  const card = evt.target.closest('.elements__card');
  card.remove();
}

function formSubmitHandler(evt) {
    evt.preventDefault()
    userName.textContent = nameInput.value
    userJob.textContent = jobInput.value
    editProfilePopup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler);

function handleLikeClick(evt) {
  evt.target.classList.toggle('elements__like_active');
}


const renderCards =  (item) => {
  const cardTemplate = document.querySelector('.template').content;
  const cardClone = cardTemplate.querySelector('.elements__card').cloneNode('true');
  const elementsList = document.querySelector('.elements');
  cardClone.querySelector('.elements__caption').textContent = item.name;
  cardClone.querySelector('.elements__image').src = item.link;
  cardClone.querySelector('.elements__image').alt =  item.name;
  elementsList.prepend(cardClone);
  const likeButton = cardClone.querySelector('.elements__like');
  likeButton.addEventListener('click', handleLikeClick);
  const deleteButton = cardClone.querySelector('.elements__delete');
  deleteButton.addEventListener('click', handleDeleteClick);
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
});

function addCard () {
  const cardTemplate = document.querySelector('.template').content;
  const card = cardTemplate.querySelector('.elements__card').cloneNode('true');
  const elementsList = document.querySelector('.elements');
  card.querySelector('.elements__caption').textContent = cardName.value;
  card.querySelector('.elements__image').src = cardSrc.value;
  card.querySelector('.elements__image').alt = cardName.value;
  elementsList.prepend(card);
  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', handleLikeClick);
  const deleteButton = card.querySelector('.elements__delete');
  deleteButton.addEventListener('click', handleDeleteClick);
  }


function addEventListeners() {
  addProfileBtn.addEventListener('click', () => {
    addNewCardPopup.classList.add('popup_opened');
    addCardForm.reset();
    });
    
    addCardForm.addEventListener('submit',(evt) => {     
        evt.preventDefault();
        addCard();
        addNewCardPopup.classList.remove('popup_opened');
      });

    editProfileBtn.addEventListener('click', () => {
      editProfilePopup.classList.add('popup_opened');
      nameInput.value = userName.textContent;
      jobInput.value = userJob.textContent;
    })
      
    popupClose.addEventListener('click', () => {editProfilePopup.classList.remove('popup_opened');})

}

addEventListeners();
