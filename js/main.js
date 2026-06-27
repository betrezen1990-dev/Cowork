/* Tiny slider */
const slider = tns({
  container: '.slider',

  items: 2.7,
  gutter: 10,
  mouseDrag: true,
  speed: 400,

  autoWidth: true,  
  lazyload: true,
  swipeAngle: false,

  controlsContainer: '.locations__controls',
  nav: false,
});

// Кнопки управления слайдером
const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

// Обращаемся по кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад
// /* VAR 1 */
//   prevMobile.addEventListener('click', function() {
//     slider.goTo('prev');
//   });

//   nextMobile.addEventListener('click', function() {
//     slider.goTo('next');
//   });

// /* VAR 2 */
//   prevMobile.onclick = function() {
//     slider.goTo('prev');
//   };

//   nextMobile.onclick = function() {
//     slider.goTo('next');
//   };

/* VAR 3 */
prevMobile.onclick = () => slider.goTo('prev');
nextMobile.onclick = () => slider.goTo('next');