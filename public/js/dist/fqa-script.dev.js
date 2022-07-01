"use strict";

$('.tab-link>a').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active'); //^上方按鈕區塊的切換^//

  $($(this).attr('href')).addClass('active');
  $($(this).attr('href')).siblings().removeClass('active');
}); //tab-link END

$('.question-content').on('click', function () {
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
}); //.question-content end