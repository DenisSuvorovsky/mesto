const cardTemplate = document.querySelector('.template').content;
const editProfileBtn = document.querySelector('.profile__edit-btn');
const addProfileBtn = document.querySelector('.profile__add-btn');
const editProfilePopup = document.querySelector('.popup_type_edit');
const jobInput = document.querySelector('.popup__input_type_input-job');
const nameInput = document.querySelector('.popup__input_type_input-name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const editProfileForm = document.querySelector('.popup__form_type_profile-edit');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = addNewCardPopup.querySelector('.popup__form_type_add-card');
const cardName = addCardForm.querySelector('.popup__input_type_card-name');
const cardSrc = addCardForm.querySelector('.popup__input_type_card-src');
const popupList = document.querySelectorAll('.popup');
const elementsList = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__img');
const caption = imagePopup.querySelector('.popup__caption');


function handleDeleteClick(evt) {
  const card = evt.target.closest('.elements__card');
  card.remove();
}

function handleLikeClick(evt) {
  evt.target.classList.toggle('elements__like_active');
}

function handleSubmitProfileEditForm(evt) {
    evt.preventDefault()
    userName.textContent = nameInput.value
    userJob.textContent = jobInput.value
    closePopup(editProfilePopup);
}
editProfileForm.addEventListener('submit', handleSubmitProfileEditForm);


function closePopup(popup) {
  popup.classList.remove('popup_opened');
};


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

popupList.forEach((popup) =>  {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
});

//Возвращаем готовую разметку

 function createCard(name, link) {
  const cardClone = cardTemplate.querySelector('.elements__card').cloneNode('true');
  const cardImage = cardClone.querySelector('.elements__image');
  const likeButton = cardClone.querySelector('.elements__like');
  const deleteButton = cardClone.querySelector('.elements__delete');
  const cardCaption = cardClone.querySelector('.elements__caption');
  cardCaption.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  deleteButton.addEventListener('click', handleDeleteClick);
  likeButton.addEventListener('click', handleLikeClick);
  cardImage.addEventListener('click', () => {
    caption.textContent = name;
    image.src = link;
    image.alt = name;
    openPopup(imagePopup);
  });
    return cardClone;
  }

//Вставляем карточку с разметкой в начало списка карточек
function addCard (name, link) {
  const newCard = createCard(name, link);
  elementsList.prepend(newCard);
}

//Вывод карточек из начального массива на страницу
initialCards.forEach(function(item){
  addCard(item.name, item.link);
});


  
//Обработчики событий
  function addEventListeners() {
    addProfileBtn.addEventListener('click', () => {
      openPopup(addNewCardPopup);
      addCardForm.reset();
      });
      
      addCardForm.addEventListener('submit',(evt) => {     
          evt.preventDefault();
          addCard(cardName.value, cardSrc.value);
          closePopup(addNewCardPopup);
          handleClosePopup(addNewCardPopup);
        });

      editProfileBtn.addEventListener('click', () => {
        openPopup(editProfilePopup);
        nameInput.value = userName.textContent;
        jobInput.value = userJob.textContent;
      })

        };
  
  addEventListeners();

