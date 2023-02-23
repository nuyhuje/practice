/* AOS 모션 */
AOS.init({
  duration: 500
});

/* 상단 이동 스크롤 버튼 */
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $(".scroll-top-button").addClass("is-active");
  }
  else{
    $(".scroll-top-button").removeClass("is-active");
  }
});

$(".scroll-top-button").click(function(){
  window.scrollTo({top: 0, behavior: "smooth"});
});

/* 영상 재생 */
function video_play(button, frame) {
  $('#' + button).hide();
  $('#' + frame)[0].src += "?autoplay=1&mute=1";
};
// $('.promotion__video--button').hide();
// $('#youtube-player')[0].src += "?autoplay=1&mute=1";