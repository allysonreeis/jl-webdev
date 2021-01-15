var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function(){
  var boxContact = document.querySelector('.jl-contact-info');
  boxContact.classList.toggle('jl-is-open')

  // Poderia ser usado 'this' no lugar de btnContact
  btnContact.classList.toggle('jl-change-icon');
});