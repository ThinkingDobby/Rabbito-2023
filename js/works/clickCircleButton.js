document.addEventListener("DOMContentLoaded", function() {
    const circleButtons = document.getElementsByClassName("circleButton")
    const contentSections = document.getElementsByClassName("section")

    const whiteCirclePath = "../data/images/works/works_circle_white.png"
    const grayCirclePath = "../data/images/works/works_circle_gray.png"

    let selectedType = 0;
    let firstGroupSize = document.querySelectorAll('.buttonGroup:nth-child(1) .circleButton').length;
    let secondGroupSize = document.querySelectorAll('.buttonGroup:nth-child(2) .circleButton').length;

    let clickedIndex = 0;

    for (let i = 0; i < circleButtons.length; i++) {
        circleButtons[i].addEventListener("mouseover", function() {
            circleButtons[i].src = whiteCirclePath;
        });

        circleButtons[i].addEventListener("mouseout", function() {
            if (i != clickedIndex) {
                circleButtons[i].src = grayCirclePath;
            }
        });

        circleButtons[i].addEventListener("click", function() {
            circleButtons[clickedIndex].src = grayCirclePath;
            contentSections[clickedIndex].style.display = "none";

            circleButtons[i].src = whiteCirclePath;
            contentSections[i].style.display = "flex";
            clickedIndex = i;
        });
    }
});
