/** 
*
* -----------------------------------------------------------------------------
* Template : GamFi - Metaverse Web3 IGO/IDO Token Launchpad Figma Template
* Author : uigigs
* Author URI : http://www.uigigs.com/
*
* -----------------------------------------------------------------------------
*
**/
//window load
(function ($) {
  ("use strict");
$(window).on('load', function () {
    $(".loader_first").delay(500).fadeOut(300);
    $(".circular-spinner").on('click', function () {
        $(".loader_first").fadeOut(300);
    })
});

window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};


var web3;
async function Connect(){
	await window.web3.currentProvider.enable();
	web3=new Web3(window.web3.currentProvider);
};


$('#submenu').click(function () {
    $('#sub_menu_list').toggle();
});


// Counter Up
  var counter = $('.counter');
  if(counter.length) {  
      $('.counter').counterUp({
          delay: 20,
          time: 1500
      });
  };


$('.count').each(function () {
    $(this).prop('Counterr', 2024).animate({
        Counter: $(this).text()
    }, {
        duration: 420000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


(function() {
  window.inputNumber = function(el) {
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();
    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);
      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();
inputNumber($('.input-number'));


var swiper_slider = $('.swiper-autoplay-slider');
  if(swiper_slider.length) { 
    var swiper = new Swiper('.swiper-autoplay-slider', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
        autoplay: {
            delay: 0,
        }, 
        speed: 2000,
    });
    $(".swiper-autoplay-slider").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    })
}

var swiper_slider = $('.slickSlider');
  if(swiper_slider.length) { 
    var swiper = new Swiper('.slickSlider', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        autoplay: {
            delay: 5000,
        }, 
        speed: 2000,
    });
}

})(jQuery);

var i = 0;
function buttonClick_Inc() {
    i++;
    document.getElementById('quantity').value = i;
};
function buttonClick_Dec() {
    i-- ;
    document.getElementById('quantity').value = i;
};

$(function () {
    $("#mint_menu_btn").click(function () {
        $("#mint_menu_btn").toggleClass("active");
        $(".mint_menu_section").toggleClass("active");
        $(".bithu_header").removeClass("active");
    });
});
$(function () {
    $("#mint_menu_btn").click(function () {
        $(".bithu_mint_header").removeClass("bithu_header");
    });
});


//canvas menu
$(function () {
    $(".menu_bar").click(function () {
        $(".bithu_mobile_menu").show();
    });
    $(".mobile_menu_hide, .mobile_menu_close_btn, .mobile_menu_social_links").click(function () {
        $(".bithu_mobile_menu").hide();
        $(".mobile_sub_menu_list").hide();
    });    
});
window.onclick = function(event) {
  if (event.target == bithu_mobile_menu) {
    bithu_mobile_menu.style.display = "none";
  }
}

// collections collaps 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
};

// Collaps Mobile Screen
$(window).resize(function() {
    if ($(window).width() < 768) {
     $('.collapsible').removeClass('active');
    }
 });




/*--------
Home5 Slider
-----------*/
function openContent(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("home_tab_content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("home_tab_link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenHome").click();
//V5Menu btns
$(".home5-slide-btns button").click(function () {
    $(".home5-slide-btns").toggleClass("active");
});

//Auto Slide home

let slideAuto = 0;
showAutoSlides();

function showAutoSlides() {
    let i;
    let autoslides = document.getElementsByClassName("myautoSlides");
    let autodots = document.getElementsByClassName("dot");
    for (i = 0; i < autoslides.length; i++) {
        autoslides[i].style.display = "none";
    }
    slideAuto++;
    if (slideAuto > autoslides.length) {
        slideAuto = 1
    }
    for (i = 0; i < autodots.length; i++) {
        autodots[i].className = autodots[i].className.replace(" active", "");
    }
    autoslides[slideAuto - 1].style.display = "block";
    autodots[slideAuto - 1].className += " active";
    setTimeout(showAutoSlides, 500);
};


//Auto Slide mint

let slideMint = 0;
showMintSlides();

function showMintSlides() {
    let i;
    let mintslides = document.getElementsByClassName("myMintSlides");
    let mintdots = document.getElementsByClassName("dott");
    for (i = 0; i < mintslides.length; i++) {
        mintslides[i].style.display = "none";
    }
    slideMint++;
    if (slideMint > mintslides.length) {
        slideMint = 1
    }
    for (i = 0; i < mintdots.length; i++) {
        mintdots[i].className = mintdots[i].className.replace(" active", "");
    }
    mintslides[slideMint - 1].style.display = "block";
    mintdots[slideMint - 1].className += " active";
    setTimeout(showMintSlides, 500);
};


//index5 page roadmap slider
$('.owl-carousel.roadmap-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});





