document.addEventListener("DOMContentLoaded", function() {
    const toAbilitySectionButton = document.getElementsByClassName("toAbilitySectionButton")[0];
    
    toAbilitySectionButton.addEventListener("click", function() {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      });


    const toCertificateSectionButton = document.getElementsByClassName("toCertificateSectionButton")[0];
    const certificateSection = document.getElementsByClassName("certificateSection")[0];

    toCertificateSectionButton.addEventListener("click", function() {
      window.scrollTo({
        top: certificateSection.offsetTop + certificateSection.offsetHeight,
        behavior: 'smooth'
      });
    });
});