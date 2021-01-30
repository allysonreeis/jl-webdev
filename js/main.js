var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

window.addEventListener('load', function(){
  var pagePreLoader = document.querySelector('.jl-preloader');

    pagePreLoader.classList.add('jl-fade-out');
 
    setTimeout(function () {
        pagePreLoader.style.display = 'none';
    }, 2000);
})

btnContact.addEventListener('click', function(){
  var boxContact = document.querySelector('.jl-contact-info');
  boxContact.classList.toggle('jl-is-open');

  // Poderia ser usado 'this' no lugar de btnContact
  btnContact.classList.toggle('jl-change-icon');
});

// Botão de orçamento
for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener('click', function(){
    var overlay = document.querySelector('.jl-overlay');
    var modalOrcamento = document.querySelector('#jl-modal-orcamento');
    
    overlay.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-slide-top-in');
  });
}

// Scroll com Waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');

var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function() {
    myScrollDown.classList.toggle('jl-fade-out')
  },
  offset: '80%'
})

// Variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container')
var sliderList = document.querySelector('.jl-slider-list')
var sliderItem = document.querySelectorAll('.jl-slider-item')
var sliderListWidth = null;

// Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

// Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (let i = 0; i < sliderItem.length; i++) {
  sliderItem[i].style.width = containerWidth + 'px';

  var sliderItemWidth = sliderItem[i].offsetWidth;

  sliderListWidth += sliderItemWidth;
  console.log(sliderListWidth);
}

sliderList.style.width = sliderListWidth + 'px';

// Animação do Slider onClick

var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;

nextItem.addEventListener('click', function(){
  var lastItem = sliderListWidth - containerWidth;
  if((-1*(sliderPos) === lastItem)){
    return;
  }

  sliderPos -= containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos
  });
})

prevItem.addEventListener('click', function(){
  if(sliderPos === 0){
    return;
  }

  sliderPos += containerWidth;

  anime({
    targets: sliderList,
    translateX: sliderPos
  });
})