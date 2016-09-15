//открытие модального окна с картой на js

var openMap = document.querySelector('.js-open-map');
var modalMap = document.querySelector('.modal-map');
var overlay = document.querySelector('#overlay');
var closeMapButton = modalMap.querySelector('.modal-close');


//функция закрытия окна
function closeMap() {
  modalMap.classList.remove('active');
  overlay.classList.remove('active');
}


//открытие окна на клику на вход
openMap.addEventListener('click', function(e) {
  e.preventDefault();
  modalMap.classList.add('active');
  overlay.classList.add('active');
});



//закрытие окна по нажатию на крестик
closeMapButton.addEventListener('click', function(e) {
  e.preventDefault();
  closeMap();
});


//закрытие окна по нажатию на overlay
overlay.addEventListener('click', function(e) {
  e.preventDefault();
  closeMap();
});



//закрытие окна по esc
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if (modalMap.classList.contains('active')) {
      closeMap();
    }
  }
});


//яндекс-карты

    ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323055],
                zoom: 14
            });

        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
          hintContent: 'Barbershop',
          balloonContent: 'Barbershop',
        });
        myMap.geoObjects.add(myPlacemark);
        }
