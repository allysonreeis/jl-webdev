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