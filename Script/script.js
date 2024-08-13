// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(() => {
    plusSlides(1);
}, 4000);



// videos
document.querySelectorAll('.project').forEach(container => {
  const video = container.querySelector('.video');
  const playButton = container.querySelector('.play-button');

  playButton.addEventListener('click', () => {
      video.play();
      playButton.style.display = 'none';
  });

  video.addEventListener('ended', () => {
      playButton.style.display = 'block';
  });

  video.addEventListener('pause', () => {
      playButton.style.display = 'block';
  });
});




// back to top button:
let mybutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// navigation bar
window.addEventListener("scroll", function() {
    let nav = document.querySelector(".navigation-wrapper");
    if (window.scrollY > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
