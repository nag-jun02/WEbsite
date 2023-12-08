$('.btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#menu').toggleClass('is-active');
});

$('#menu a').on('click',function(){
    $(this).removeClass('is-active');
    $('#menu').removeClass('is-active');
});

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();
  
    $('.g_ul').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});

const header = $('#header');

$('a[href^="#"]').on('click', function() {
  const gap = header.outerHeight();
  const speed = 500;
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? "html" : href);
  const position = target.offset().top - gap;
  
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});