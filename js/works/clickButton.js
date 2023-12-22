document.addEventListener("DOMContentLoaded", function() {
    const circleButtons = document.getElementsByClassName("circleButton")
    const arrowButtons = document.getElementsByClassName("arrowButton")
    const circleButtonGroups = document.getElementsByClassName("buttonGroup")
    const contentSections = document.getElementsByClassName("section")
    const titles = document.getElementsByClassName("textButton")

    const whiteCirclePath = "../data/images/works/works_circle_white.png"
    const grayCirclePath = "../data/images/works/works_circle_gray.png"

    const white = "#FEFEFE";
    const gray4 = "#8B8B8B";

    let selectedType = 0;
    let clickedIndex = 0;

    let firstGroupSize = document.querySelectorAll('.buttonGroup:nth-child(1) .circleButton').length;
    let secondGroupSize = document.querySelectorAll('.buttonGroup:nth-child(2) .circleButton').length;

    // titleButton
    console.log(titles);
    for (let i = 0; i < titles.length; i++) {
        titles[i].addEventListener("mouseover", function() {
            titles[i].style.color = white;
        });
    
        titles[i].addEventListener("mouseout", function() {
            if (i != selectedType) {
                titles[i].style.color = gray4;
            }
        });
    
        titles[i].addEventListener("click", function() {            
            if (i != selectedType) {
                titles[selectedType].style.color = gray4;
                titles[i].style.color = white;

                circleButtons[clickedIndex].src = grayCirclePath;
                contentSections[clickedIndex].style.display = "none";

                circleButtonGroups[selectedType].style.display = "none";
                circleButtonGroups[i].style.display = "flex";

                if (i == 0) {   // 메인
                    circleButtons[0].src = whiteCirclePath;
                    contentSections[0].style.display = "flex";

                    clickedIndex = 0;
                } else if (i == 1) {    // 서브
                    circleButtons[firstGroupSize].src = whiteCirclePath;
                    contentSections[firstGroupSize].style.display = "flex";
        
                    clickedIndex = firstGroupSize;
                }

                selectedType = i;
            }
        });
    }

    // arrowButton
    arrowButtons[0].addEventListener("click", function() {
        let nextIndex = clickedIndex - 1
        if (selectedType == 0) {
            if (nextIndex < 0) nextIndex = firstGroupSize - 1
        } else if (selectedType == 1) {
            if (nextIndex < firstGroupSize) nextIndex = firstGroupSize + secondGroupSize - 1
        }

        circleButtons[nextIndex].dispatchEvent(new Event("click"));
    });
    
    arrowButtons[1].addEventListener("click", function() {
        let nextIndex = clickedIndex + 1
        if (selectedType == 0) {
            if (nextIndex >= firstGroupSize) nextIndex = 0
        } else if (selectedType == 1) {
            if (nextIndex >= firstGroupSize + secondGroupSize) nextIndex = firstGroupSize
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
