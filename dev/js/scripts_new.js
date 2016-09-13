//открытие модального окна на js

var loginLink = document.querySelector('#login');
var modal = document.querySelector('#modal-login');
var close = modal.querySelector('#modal-login__close');
var overlay = document.querySelector('#overlay');
var login = modal.querySelector('[name=login]');

loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('active');
  overlay.classList.add('active');
  login.focus();
});

close.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.remove('active');
  overlay.classList.remove('active');
});




