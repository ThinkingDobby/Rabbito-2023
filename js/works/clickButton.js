document.addEventListener("DOMContentLoaded", function() {
    const circleButtons = document.getElementsByClassName("circleButton")
    const arrowButtons = document.getElementsByClassName("arrowButton")
    const circleButtonGroups = document.getElementsByClassName("buttonGroup")
    const titles = document.getElementsByClassName("subTitle")
    const contentSections = document.getElementsByClassName("section")

    const whiteCirclePath = "../data/images/works/works_circle_white.png"
    const grayCirclePath = "../data/images/works/works_circle_gray.png"

    let selectedType = 0;
    let firstGroupSize = document.querySelectorAll('.buttonGroup:nth-child(1) .circleButton').length;
    let secondGroupSize = document.querySelectorAll('.buttonGroup:nth-child(2) .circleButton').length;

    let clickedIndex = 0;

    // titleButton


    // arrowButton
    arrowButtons[0].addEventListener("click", function() {
        let nextIndex = clickedIndex - 1
        if (selectedType == 0) {
            if (nextIndex < 0) nextIndex = firstGroupSize - 1
        } else if (selectedType == 1) {
            if (nextIndex < firstGroupSize) nextIndex = secondGroupSize
        }

        circleButtons[nextIndex].dispatchEvent(new Event("click"));
    });
    
    arrowButtons[1].addEventListener("click", function() {
        let nextIndex = clickedIndex + 1
        console.log(nextIndex);
        if (selectedType == 0) {
            if (nextIndex >= firstGroupSize) nextIndex = 0
        } else if (selectedType == 1) {
            if (nextIndex >= secondGroupSize) nextIndex = firstGroupSize
        }

        circleButtons[nextIndex].dispatchEvent(new Event("click"));
    });


    // circleButton
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
