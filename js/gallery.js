var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');
var currCounter = document.querySelector('.jl-current-slide');
var totalCounter = document.querySelector('.jl-total-slide');
var skeletonLoading = document.querySelector('.jl-skeleton-loading');

// Corrige o deslocamento da galeria
var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight; // Se o ';' for removido, gera um erro na página
postGallery.style.height = (postGalleryHeight - 270) + 'px'; // Para funcionar sem ';', enter nessa linha

//Counter Formater
var counterFormatter = function(n){
  if (n < 10) {
    return '0' + n;
  } else {
    return n
  }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);

const skeletonAnim = function(imagem){
  var myImage = new Image();
  myImage.src = imagem;
  myImage.addEventListener('load', function(){
    skeletonLoading.classList.add('jl-fade-out');
    setTimeout(function(){
      skeletonLoading.style.display = 'none';
    }, 2000)
  })
}

// Open gallery modal
const getImageSrc = function(){
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function(){
      var imageSrc = this.getAttribute('data-src');
      var itemNum = this.getAttribute('data-item');
      
      skeletonLoading.style.display = 'flex';

      frameImage.setAttribute('src', imageSrc);
      frameImage.setAttribute('data-index', itemNum);

      overlay.classList.add('jl-is-open');
      frameContainer.classList.add('jl-is-open');

      currCounter.innerHTML = counterFormatter(itemNum);
      
      skeletonAnim(imageSrc);
    })
  }
}

getImageSrc();

for (let i = 0; i < closeGallery.length; i++) {
  closeGallery[i].addEventListener('click', function(){
      overlay.classList.remove('jl-is-open');
      frameContainer.classList.remove('jl-is-open');
  });
}

/* // NextItem sem loop
const nextItem = function(){
  let currItemNum = frameImage.getAttribute('data-index');
  let nextItem = parseInt(currItemNum) + 1;

  if(galleryImages.length >= nextItem) {
    let item = document.querySelector(`[data-item='${parseInt(nextItem)}']`);
    let srcItemImage = item.dataset.src;
  
    frameImage.setAttribute('src', srcItemImage);
    frameImage.setAttribute('data-index', nextItem);
  }
}

// PrevItem sem loop
const prevItem = function(){
  let currItemNum = frameImage.getAttribute('data-index');
  let prevItem = parseInt(currItemNum) - 1;

  if(prevItem > 0) {
    let item = document.querySelector(`[data-item='${parseInt(prevItem)}']`);
    let srcItemImage = item.dataset.src;
  
    frameImage.setAttribute('src', srcItemImage);
    frameImage.setAttribute('data-index', prevItem);
  }
}*/

const nextItem = function(){
  var currItemNum = frameImage.getAttribute('data-index');
  var nextItemNum = parseInt(currItemNum) + 1;

  for (let i = 0; i < galleryImages.length; i++) {
    var item = galleryImages[i];
    var itemNum = parseInt(item.getAttribute('data-item'));

    if (itemNum === nextItemNum) {
      var nextSrc = item.getAttribute('data-src');
      var nextIndex = item.getAttribute('data-item');

      skeletonLoading.style.display = 'flex';

      frameImage.setAttribute('src', nextSrc);
      frameImage.setAttribute('data-index', nextIndex);
    
      currCounter.innerHTML = counterFormatter(nextIndex);
    
      skeletonAnim(nextSrc);
    
    }
  }
}

const prevItem = function(){
  var currItemNum = frameImage.getAttribute('data-index');
  var prevItemNum = parseInt(currItemNum) - 1;

  for (let i = 0; i < galleryImages.length; i++) {
    var item = galleryImages[i];
    var itemNum = parseInt(item.getAttribute('data-item'));

    if (itemNum === prevItemNum) {
      var prevSrc = item.getAttribute('data-src');
      var prevIndex = item.getAttribute('data-item');

      skeletonLoading.style.display = 'flex';

      frameImage.setAttribute('src', prevSrc);
      frameImage.setAttribute('data-index', prevIndex);
    
      currCounter.innerHTML = counterFormatter(prevIndex);
    
      skeletonAnim(prevSrc);
    }
  }
}

btnNext.addEventListener('click', function(){
  nextItem();
})

btnPrev.addEventListener('click', function(){
  prevItem();
})