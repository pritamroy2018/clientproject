
  $(document).ready(function(){
  /*$('tbody tr:even').addClass('highlited');*/
  $('.hover-on').mouseover(function(){
    $( this ).find('.hover-body').toggleClass('hidden block');
  });
  $('.hover-on').mouseout(function(){
    $( this ).find('.hover-body').toggleClass('hidden block');
  });
});



        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 28,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });


   
      $(document).ready(function () {
        document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});
    
    $(function () {
        if ($('.accordion-list').length) {
            $('.accordion-list').on('click', '.accordion-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
                $(this).closest('.accordion-list-item').siblings().find('.fa-solid').addClass('fa-plus').removeClass('fa-minus');

                // add slideToggle into this
                $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
                $(this).find('.fa-solid').toggleClass('fa-plus fa-minus');
                
            });
        }
    });

});
    
      $(".hamburger").click(function(){
        $(".mobile-nav").slideToggle();
      });
      $(".accordion-list").click(function(){
        $(this).find('.acci').toggleClass("text-blue-700");
      });
   
      var swiper = new Swiper(".mySwiper-next", {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
            },
        });
   

   
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('#navbar').addClass('top-fixedm');
            }
            else{
                $('#navbar').removeClass('top-fixedm');
            }
        })

      

        var swiper = new Swiper(".intelligence", {
          watchSlidesProgress: true,
          slidesPerView: 4,
          spaceBetween: 20,
          loop: true,
          navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
   