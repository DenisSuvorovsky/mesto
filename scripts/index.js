(function() {
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
  
  function handleSubmitProfileEditForm(evt) {
      evt.preventDefault();
      userName.textContent = nameInput.value;
      userJob.textContent = jobInput.value;
      closePopup(popupEditProfile);
  }
  formEditProfile.addEventListener('submit', handleSubmitProfileEditForm);
  
  //Открытие поп-апа
  function openPopup(popup) {
      popup.classList.add('popup_opened');
      document.addEventListener('keydown', closeByEscBtn);
  }
  
  //Закрытие поп-апа
  function closePopup(popup) {
      popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', closeByEscBtn);
  }
  
  ////Закрытие поп-апа нажатием на кнопку и кликом на оверлей
  popupList.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
              closePopup(popup);
          }
          if (evt.target.classList.contains('popup__close-button')) {
              closePopup(popup);
          }
      });
  });
  
  //Закрытие поп-апа нажатием на Esc
  function closeByEscBtn(evt) {
      if (evt.key === 'Escape') {
          const openedPopup = document.querySelector('.popup_opened');
          closePopup(openedPopup);
      }
  };
  
  
  //Обработчики событий
  function addEventListeners() {
      profileAddBtn.addEventListener('click', () => {
          openPopup(popupAddNewCard);
          formAddCard.reset();
      });
  
      formAddCard.addEventListener('submit', (evt) => {
          evt.preventDefault();
          addCard(cardName.value, cardSrc.value);
          closePopup(popupAddNewCard);
          formAddCard.reset();
      });
  
      profileEditBtn.addEventListener('click', () => {
          openPopup(popupEditProfile);
          nameInput.value = userName.textContent;
          jobInput.value = userJob.textContent;
      });
  
  };
  
  addEventListeners();  
})();
