'use strict'
console.log("Total points: 110 \n 10 Вёрстка валидная; \n 3 есть: header, main, footer; \n 3 четыре элемента section 3 только один заголовок h1; \n 3 три заголовка h2; \n 3 один элемент nav; \n 3 два списка ul > li > a; \n 2 четыре кнопки button; \n 48 блок header, footer; секция preview, steps, destinations, stories; \n 12 Требования к css выполнены; \n 20 Интерактивность, реализуемая через css выполнена;");
(function() {
  coonst header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 60) {
      header.classlist.add('header_active');
    }
  };
}());