$(document).ready(function() {

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

});
