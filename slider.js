var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeImage(n) {
    
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    
    if (n === undefined) {
        currentImg = (currentImg + 1) % imgs.length; 
    } else {
        currentImg = n; 
    }

    imgs[currentImg].style.opacity = 1; 
    dots[currentImg].className += ' active'; 
}


var timer = setInterval(changeImage, interval);


function manualChangeImage(n) {
    clearInterval(timer); 
    changeImage(n); 
    timer = setInterval(changeImage, interval); 
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });