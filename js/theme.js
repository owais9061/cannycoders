    "use strict";


     function prealoader () {
       if ($('#loader').length) {
         $('#loader').fadeOut();
         $('#loader-wrapper').delay(350).fadeOut('slow');
         $('body').delay(350).css({'overflow':'visible'});
      };
     }
    
    function removePlaceholder () {
      if ($("input,textarea").length) {
        $("input,textarea").each(
                function(){
                    $(this).data('holder',$(this).attr('placeholder'));
                    $(this).on('focusin', function() {
                        $(this).attr('placeholder','');
                    });
                    $(this).on('focusout', function() {
                        $(this).attr('placeholder',$(this).data('holder'));
                    });
                    
            });
      }
    }
    
    function BannerSlider () {
      var banner = $("#theme-main-banner");
      if (banner.length) {
        banner.camera({ 
          height: '47%',
          pagination: false,
          navigation: true,
          thumbnails: false,
          playPause: false,
          pauseOnClick: false,
          autoPlay:true,
          hover: false,
          overlayer: true,
          loader: 'none',
          minHeight: '700px',
          time: 5500,
        });
      };
    }
    
    function masonaryBlog () {
      if($(".blog-masonary").length) {
        $('.blog-masonary').masonry({
    
        itemSelector: '.grid-item',
    
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
      }
    }
    
    
    
    
    function wowAnimation () {
      if($('.wow').length) {
        var wow = new WOW(
        {
          boxClass:     'wow',      
          animateClass: 'animated', 
          mobile:       true,       
          live:         true,       
          callback:     function(box) {
    
          },
          scrollContainer: null 
        }
      );
      wow.init();
      }
    }
    
    
    
    function mixitupGallery () {
      if ($("#mixitUp-item").length) {
        $("#mixitUp-item").mixItUp()
      };
    }
    
    
    function portfolioSlider () {
      var cSlider = $ (".portfolio-slider");
      if(cSlider.length) {
          cSlider.owlCarousel({
            animateOut: 'slideOutLeft',
            loop:true,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:4000,
            smartSpeed:1200,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1
                },
                551:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                }
            },
        })
      }
    }
    
    
    
    function testimonialSlider () {
      var logoslider = $ (".testimonial-slider");
      if(logoslider.length) {
          logoslider.owlCarousel({
            loop:true,
            nav:true,
            navText: ["",""],
            dots:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplaySpeed:1200,
            smartSpeed:1300,
            lazyLoad:true,
            items:1
        })
      }
    }
    
    
    function partnersLogo () {
      var logoslider = $ ("#partner-logo");
      if(logoslider.length) {
          logoslider.owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplaySpeed:1600,
            lazyLoad:true,
            singleItem:true,
            responsive:{
                0:{
                    items:1
                },
                550:{
                    items:2
                },
                992:{
                    items:4
                }
            }
        })
      }
    }
    
    
    
    
    function CounterNumberChanger () {
      var timer = $('.timer');
      if(timer.length) {
          timer.appear(function () {
            timer.countTo();
        })
      }
    }
    
    
    function scrollToTop () {
      if ($('.scroll-top').length) {
    
        
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
        
        
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });
      }
    }
    
    
    
    
    function contactFormValidation () {
      if($('.form-validation').length){
        $('.form-validation').validate({
          rules: {
            email: {
              required: true,
              email: true
            },
            sub: {
              required: true
            },
            message: {
              required: true
            }
          },
          submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        success: function() {
                            $('.form-validation :input').attr('disabled', 'disabled');
                            $('.form-validation').fadeTo( "slow", 1, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor','default');
                                $('#alert-success').fadeIn();
                            });
                        },
                        error: function() {
                            $('.form-validation').fadeTo( "slow", 1, function() {
                                $('#alert-error').fadeIn();
                            });
                        }
                    });
                }
            });
      }
    }
    
    
    function closeSuccessAlert () {
      var closeButton = $ (".closeAlert");
      if(closeButton.length) {
          closeButton.on('click', function(){
            $(".alert-wrapper").fadeOut();
          });
          closeButton.on('click', function(){
            $(".alert-wrapper").fadeOut();
          })
      }
    }
    
    
    
    function stickyHeader () {
      if ($('.theme-menu-wrapper').length) {
        var sticky = $('.theme-menu-wrapper'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
        
      };
    }
    
    
    
    function themeAccrodion () {
      if ($('.theme-accordion > .panel').length) {
        $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
              var heading = $(this).find('.panel-heading');
              heading.addClass("active-panel");
              
        });
        $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
            var heading = $(this).find('.panel-heading');
              heading.removeClass("active-panel");
             
        });
        $('.panel-heading a').on('click',function(e){
            if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                e.stopPropagation();
            }
        });
      };
    }
    
    
    
    function priceRanger () {
      if ($('.price-ranger').length) {
        $( '.price-ranger #slider-range' ).slider({
          range: true,
          min: 0,
          max: 1200,
          values: [ 99, 1035 ],
          slide: function( event, ui ) {
            $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
            $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
          }
        });
          $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
      };  
    }
    
    
    
    function productValue () {
      var inputVal = $("#product-value");
      if(inputVal.length) {
        $("#value-decrease").click(function() {
            var v= inputVal.val()-1;
            if(v>=inputVal.attr('min'))
            inputVal.val(v)
          });
    
        $("#value-increase").click(function() {
          var v= inputVal.val()*1+1;
          if(v<=inputVal.attr('max'))
          inputVal.val(v)
        });
      }
    }
    
    
    function productSlider () {
      var pSlider = $ (".related-product-slider");
      if(pSlider.length) {
          pSlider.owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplaySpeed:1000,
            lazyLoad:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                551:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        })
      }
    }
    
    
    function youtubeVideo () {
      var embed = $ (".embed-video");
      if (embed.length) {
        embed.fitVids();
      }
    }
    
    
    jQuery(document).on('ready', function() {
        (function ($) {
           removePlaceholder ();
         BannerSlider ();
         wowAnimation ();
         mixitupGallery ();
         testimonialSlider ();
         portfolioSlider ();
         partnersLogo ();
         CounterNumberChanger ();
         scrollToTop ();
         contactFormValidation ();
         closeSuccessAlert ();
         themeAccrodion ();
         priceRanger ();
         productValue ();
         productSlider ();
         youtubeVideo ()
      })(jQuery);
    });
    
    
    
    jQuery(window).on('scroll', function () {
      (function ($) {
        stickyHeader ();
      })(jQuery);
    });
    
    
    jQuery(window).on('load', function () {
       (function ($) {
        masonaryBlog ();
        prealoader ()
      })(jQuery);
     });