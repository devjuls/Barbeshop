

$(document).ready(function() {

  //////gallery

  (function(){

    $('.product-gallery__link').on('click', function(e){
      e.preventDefault();

      var
          $this = $(this),
          container = $this.closest('.product__gallery'),
          currentImg = container.find('.product-gallery-pic'),
          item = $this.closest('.product-gallery__item'),
          path = $this.attr('href'),
          duration = 200;

      if(!item.hasClass('active')) {

        currentImg.fadeOut(duration, function() {
          currentImg.attr('src', path);
          currentImg.fadeIn(duration);
        });

        item.addClass('active')
            .siblings()
            .removeClass('active');
      }

    });

  }());


  //////modal window login

  (function(){

    $('#login').on('click', function(event){ // лoвим клик пo ссылки с id="go"
      event.preventDefault();
      console.log('клик1');
      // выключaем стaндaртную рoль элементa
      $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
        function(){ // пoсле выпoлнения предъидущей aнимaции
          $('#modal-login')
            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
            .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      });
    });

    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal-login__close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
      $('#modal-login')
        .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
          function(){ // пoсле aнимaции
            $(this).css('display', 'none'); // делaем ему display: none;
            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
          }
        );
    });

  }());

});
