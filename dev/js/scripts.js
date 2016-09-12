

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

    $('#login').on('click', function(e){
      e.preventDefault();

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-login')
            .show(100).animate({top: '120px'});
      });
    });

    $('#modal-login__close, #overlay').click(function(){
      $('#modal-login').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());

});
