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


    const toValuesSectionButton = document.getElementsByClassName("toValuesSectionButton")[0];
    const valuesSection = document.getElementsByClassName("valuesSection")[0];

    toValuesSectionButton.addEventListener("click", function() {
      window.scrollTo({
        top: valuesSection.offsetTop + valuesSection.offsetHeight,
        behavior: 'smooth'
      });
    });
});