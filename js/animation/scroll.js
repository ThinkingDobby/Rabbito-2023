document.addEventListener("DOMContentLoaded", function() {
    var downButton = document.getElementsByClassName("toAbilitySectionButton")[0];
  
    downButton.addEventListener("click", function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });