document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".header:nth-child(1) .icon");

    logo.addEventListener("mouseover", function() {
        this.src = "./data/images/icon_rabbito_filled.png";
    })

    logo.addEventListener("mouseout", function() {
        this.src = "./data/images/icon_rabbito.png";
    })
});