var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon');

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

for (let i = 0; i < toggleMenu.length; i++) {
  toggleMenu[i].addEventListener('click', function(){
    var overlay = document.querySelector('.jl-menu-overlay');
    
    menuMobile.classList.toggle('jl-menu-is-closed');
    menuMobile.classList.toggle('jl-menu-is-open');
    overlay.classList.toggle('jl-is-open');
    
    var icon = btnMenuMobIcon.getAttribute('name');

    if (icon == 'menu-outline') {
      btnMenuMobIcon.setAttribute('name', 'close-outline');
    } else {
      btnMenuMobIcon.setAttribute('name', 'menu-outline');
    }
  });
}

// Botão de orçamento
for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener('click', function(){
    var modalOrcamento = document.querySelector('#jl-modal-orcamento');
    var overlay = document.querySelector('.jl-overlay');
    
    overlay.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-slide-top-in');
  });
}

// Corrige o deslocamento da galeria
var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight; // Se o ';' for removido, gera um erro na página
postGallery.style.height = (postGalleryHeight - 270) + 'px'; // Para funcionar sem ';', enter nessa linha

// Scroll com Waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');

var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function() {
    myScrollDown.classList.toggle('jl-fade-out')
  },
  offset: '80%'
})

