$(function () {
  
  /* 영상 재생 */


  /* AOS 모션 */
  AOS.init({
    duration: 500,
  });

  /* 상단 이동 스크롤 버튼 */
  $(window).scroll(function(){
    
    if($(this).scrollTop() > 100){
      $(".scroll-top-button").addClass("is-active");
    }
    else{
      $(".scroll-top-button").removeClass("is-active");
    }

  });

  $(".scroll-top-button").click(function(){
    window.scrollTo({top: 0, behavior: "smooth"});
  });

});