const cardTemplate = document.querySelector('.template').content;
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
const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__img');
const caption = imagePopup.querySelector('.popup__caption');

class Popup {
    constructor(data, selector) {
        this._name = data.name;
        this._selector = selector;
    }
}

//
//function handleDeleteClick(evt) {
//   const card = evt.target.closest('.elements__card');
//   card.remove();
//}
//
//function handleLikeClick(evt) {
//    evt.target.classList.toggle('elements__like_active');
//
//я
//function handleSubmitProfileEditForm(evt) {
//    evt.preventDefault();
//    userName.textContent = nameInput.value;
//    userJob.textContent = jobInput.value;
//    closePopup(popupEditProfile);
//}
//formEditProfile.addEventListener('submit', handleSubmitProfileEditForm);
//
////Открытие поп-апа
//function openPopup(popup) {
//    popup.classList.add('popup_opened');
//    document.addEventListener('keydown', closeByEscBtn);
//}
//
////Закрытие поп-апа
//function closePopup(popup) {
//    popup.classList.remove('popup_opened');
//    document.removeEventListener('keydown', closeByEscBtn);
//}
//
////Закрытие поп-апа нажатием на кнопку и кликом на оверлей
//popupList.forEach((popup) => {
//    popup.addEventListener('mousedown', (evt) => {
//        if (evt.target.classList.contains('popup_opened')) {
//            closePopup(popup);
//        }
//        if (evt.target.classList.contains('popup__close-button')) {
//            closePopup(popup);
//        }
//    });
//});
//
////Закрытие поп-апа нажатием на Esc
//function closeByEscBtn(evt) {
//    if (evt.key === 'Escape') {
//        const openedPopup = document.querySelector('.popup_opened');
//        closePopup(openedPopup);
//    }
//}
//
////Возвращаем готовую разметку
//function createCard(name, link) {
//    const cardClone = cardTemplate.querySelector('.elements__card').cloneNode('true');
//    const cardImage = cardClone.querySelector('.elements__image');
//    const likeButton = cardClone.querySelector('.elements__like');
//    const btnDelete = cardClone.querySelector('.elements__delete');
//    const cardCaption = cardClone.querySelector('.elements__caption');
//    cardCaption.textContent = name;
//    cardImage.src = link;
//    cardImage.alt = name;
//    btnDelete.addEventListener('click', handleDeleteClick);
//    likeButton.addEventListener('click', handleLikeClick);
//    cardImage.addEventListener('click', () => {
//        caption.textContent = name;
//        image.src = link;
//        image.alt = name;
//        openPopup(imagePopup);
//    });
//    return cardClone;
//}
//
////Вставляем карточку с разметкой в начало списка карточек
//function addCard(name, link) {
//    const Card = createCard(name, link);
//    elementsList.prepend(Card);
//}
//
////Вывод карточек из начального массива на страницу
//initialCards.forEach(function(item) {
//    addCard(item.name, item.link);
//});
//
////Обработчики событий
//function addEventListeners() {
//    profileAddBtn.addEventListener('click', () => {
//        openPopup(popupAddNewCard);
//        formAddCard.reset();
//    });
//
//    formAddCard.addEventListener('submit', (evt) => {
//        evt.preventDefault();
//        addCard(cardName.value, cardSrc.value);
//        closePopup(popupAddNewCard);
//        formAddCard.reset();
//    });
//
//    profileEditBtn.addEventListener('click', () => {
//        openPopup(popupEditProfile);
//        nameInput.value = userName.textContent;
//        jobInput.value = userJob.textContent;
//    });
//
//}
//
//addEventListeners();