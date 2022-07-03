const PopupClose = document.querySelector('.popup__close');
const EditBtn = document.querySelector('.profile__edit-btn');
const Popup = document.querySelector('.popup');
const JobInput = document.getElementById('job');
const NameInput = document.getElementById('name');
const UserName = document.querySelector('.profile__name');
const UserJob = document.querySelector('.profile__job');
const FormElement = document.querySelector('.form')


//открытие поп-апа и перенос данных из разметки в форму
EditBtn.addEventListener('click', function() {
    Popup.classList.add('popup_opened')
    NameInput.value = UserName.textContent
    JobInput.value = UserJob.textContent
})

//закрытие поп-апа
PopupClose.addEventListener('click', function () {
    Popup.classList.remove('popup_opened')
});

//изменение и сохранение данных из поп-апа
function FormSubmitHandler(evt) {
    evt.preventDefault();
    UserName.textContent = NameInput.value
    UserJob.textContent = JobInput.value
    Popup.classList.remove('popup_opened')
}
FormElement.addEventListener('submit', FormSubmitHandler);