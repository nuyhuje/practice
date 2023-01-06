$(function() {

  /* Video */
  document.getElementById('mov01').play();

  /* 스크롤 이동 시 모션 */
  $('.motion-01, .image__wrapper, .scene__03').each(function(index, item){
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom bottom",
        // markers: true,
        // toggleActions: "play pause resume reset",
      },
      yPercent: 35,
      opacity: 0,
      stagger: 0,
      duration: 1.2,
    })
  });


  /* Swiper */
  var swiper = new Swiper(".swiper-hera", {
    slidesPerView: 4,
    spaceBetween: 14,
    slidesPerGroup: 1.5,
    // loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});