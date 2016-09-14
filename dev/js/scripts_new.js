//открытие модального окна на js

var loginLink = document.querySelector('#login');
var modal = document.querySelector('#modal-login');
var close = modal.querySelector('#modal-login__close');
var overlay = document.querySelector('#overlay');
var login = modal.querySelector('[name=login]');
var password = modal.querySelector('[name=password]');
var form = modal.querySelector('form');



//функция закрытия окна
function closeForm() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  modal.classList.remove('error');
}


//открытие окна на клику на вход
loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('active');
  overlay.classList.add('active');
  login.focus();
});


//проверка, заполнены и поля формы
form.addEventListener('submit', function(e){
  e.preventDefault();
  modal.classList.remove('active');

  if (!login.value || !password.value) { //если поля не заполнены, добавить класс error

    if (modal.classList.contains('error')){
      modal.classList.remove('error');
    }

    modal.offsetWidth = modal.offsetWidth; //хак для перерисовывания окна, чтобы удалить и добавить класс error
    modal.classList.add('error');
  } else {
    closeForm(); //если поля заполнены, закрыть форму
  }
});


//закрытие окна по нажатию на крестик
close.addEventListener('click', function(e) {
  e.preventDefault();
  closeForm();
});


//закрытие окна по нажатию на overlay
overlay.addEventListener('click', function(e) {
  e.preventDefault();
  closeForm();
});


//закрытие окна по esc
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains('active')) {
      closeForm();
    }
  }
});








