document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementsByClassName("menu")[0];
    const cancelButtonBox = document.getElementsByClassName("cancelButtonBox")[0];

    document.addEventListener('click', function(event) {
        const style = window.getComputedStyle(menu);
        const transform = style.transform || style.webkitTransform;

        if (!menu.contains(event.target) && transform === 'matrix(1, 0, 0, 1, 0, 0)') {
            menu.style.transform = "translateX(100%)"

            cancelButtonBox.style.transform = "translateX(120%)"
        }
    });
});