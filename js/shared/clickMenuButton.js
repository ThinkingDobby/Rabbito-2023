document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementsByClassName("menu")[0];

    const menuButton = document.querySelector(".header .icon:nth-child(2)");

    const cancelButtonBox = document.getElementsByClassName("cancelButtonBox")[0];
    const cancelButton = document.querySelector(".cancelButtonBox .cancelIcon");

    menuButton.addEventListener("click", function() {
        menu.style.transform = "translateX(0)"

        cancelButtonBox.style.transform = "translateX(0)"
    })

    cancelButton.addEventListener("click", function() {
        menu.style.transform = "translateX(100%)"

        cancelButtonBox.style.transform = "translateX(120%)"
    })
});