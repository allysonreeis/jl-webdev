// Variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.jl-current-slide');
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;


// Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

// Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (let i = 0; i < sliderItem.length; i++) {
  sliderItem[i].style.width = containerWidth + 'px';

  var sliderItemWidth = sliderItem[i].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

// Animação do Slider onClick

// HANDLERS

// Next Slider Animação
var nextSlideAnim = function() {
  var lastItem = sliderListWidth - containerWidth;
  if((-1*(sliderPos) === lastItem)){
    return;
  }

  sliderPos -= containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos
  });
}

// Prev slider Animação
var prevSlideAnim = function() {
  if(sliderPos === 0){
    return;
  }

  sliderPos += containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos
  });
}

//Counter Formater
var counterFormatter = function(n){
  if (n < 10) {
    return '0' + n;
  } else {
    return n
  }
}

// Counter Add
var counterAdd = function(){
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
  }
}

// Counter Remove
var counterRemove = function(){
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
  }
}

// ACTIONS

totalSlide.innerHTML = counterFormatter(sliderTotalItems);



nextItem.addEventListener('click', function(){
  nextSlideAnim();
  counterAdd();
})

prevItem.addEventListener('click', function(){
  prevSlideAnim();
  counterRemove();
})