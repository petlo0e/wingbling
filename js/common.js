$(document).ready(function(){//시작

    //데스크탑 gnb
    $(".depth2").hide();
    $(".gnb > li").mouseenter(function(){
      $(this).children(".depth2").stop().fadeIn();
    });
  
    $(".gnb > li").mouseleave(function(){
      $(this).children(".depth2").stop().fadeOut();
    });


    //슬라이드
    var mb = new Swiper(".mb", {
      spaceBetween: 30,
      effect: "fade",

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500, // 1000=1초
        disableOnInteraction: false,
      }, 
      loop:true,      

    });

    //슬라이드
    var rv = new Swiper(".rv", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true,
      slidesPerView: 4, //슬라이드갯수
      spaceBetween: 30, //슬라이드 사이 간격
    });



});//끝