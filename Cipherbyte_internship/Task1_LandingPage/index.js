
$(document).ready(function() {
    $(".nav-link").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("menu-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500); 
  }
  
  
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    
  });
  

let currentSlide = 0;
const menuItems = document.querySelectorAll('.menu-item');

function showSlide(index) {
    menuItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
    currentSlide = index;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = menuItems.length - 1;
    } else if (currentSlide >= menuItems.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}


showSlide(currentSlide);
