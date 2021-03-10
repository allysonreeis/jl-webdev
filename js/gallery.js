var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');

const getImageSrc = function(){
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function(){
      var imageSrc = this.getAttribute('data-src');
      var itemNum = this.getAttribute('data-item');
      
      frameImage.setAttribute('src', imageSrc);
      frameImage.setAttribute('data-index', itemNum);

      overlay.classList.add('jl-is-open');
      frameContainer.classList.add('jl-is-open');
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
  var currItemNum = frameImage.getAttribute('data-index');
  var nextItem = parseInt(currItemNum) + 1;

  if(galleryImages.length >= nextItem) {
    let item = document.querySelector(`[data-item='${parseInt(nextItem)}']`);
    let srcItemImage = item.dataset.src;
  
    frameImage.setAttribute('src', srcItemImage);
    frameImage.setAttribute('data-index', nextItem);
  }
}

// PrevItem sem loop
const prevItem = function(){
  var currItemNum = frameImage.getAttribute('data-index');
  var prevItem = parseInt(currItemNum) - 1;

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

      frameImage.setAttribute('src', nextSrc);
      frameImage.setAttribute('data-index', nextIndex);
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

      frameImage.setAttribute('src', prevSrc);
      frameImage.setAttribute('data-index', prevIndex);
    }
  }
}

btnNext.addEventListener('click', function(){
  nextItem();
})

btnPrev.addEventListener('click', function(){
  prevItem();
})