document.addEventListener("DOMContentLoaded", function() {
    const logoBox = document.getElementsByClassName("logoBox")[0];

    const logo = document.querySelector(".logoBox .icon");
    const logoHovered = document.querySelector(".logoBox .iconHovered");

    logoBox.addEventListener("mouseover", function() {
        logo.style.opacity = 0;
        logoHovered.style.opacity = 1;
    })

    logoBox.addEventListener("mouseout", function() {
        logo.style.opacity = 1;
        logoHovered.style.opacity = 0;
    })
});