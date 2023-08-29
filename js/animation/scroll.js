document.addEventListener("DOMContentLoaded", function() {
    var downButton = document.getElementsByClassName("downButton")[0];
  
    downButton.addEventListener("click", function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });