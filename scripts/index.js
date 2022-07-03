const popupClose = document.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const jobInput = document.querySelector('.popup__input_job');
const nameInput = document.querySelector('.popup__input_name');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.form')


//открытие поп-апа и перенос данных из разметки в форму
editBtn.addEventListener('click', function() {
    popup.classList.add('popup_opened')
    nameInput.value = userName.textContent
    jobInput.value = userJob.textContent
})

//закрытие поп-апа
popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened')
});

//изменение и сохранение данных из поп-апа
function FormSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value
    userJob.textContent = jobInput.value
    popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', FormSubmitHandler);