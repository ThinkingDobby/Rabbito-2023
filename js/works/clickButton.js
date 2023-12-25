document.addEventListener("DOMContentLoaded", function() {
    const circleButtons = document.getElementsByClassName("circleButton")
    const arrowButtons = document.getElementsByClassName("arrowButton")
    const circleButtonGroups = document.getElementsByClassName("buttonGroup")
    const contentSections = document.getElementsByClassName("section")
    const titles = document.getElementsByClassName("textButton")

    const white = "#FEFEFE";
    const gray4 = "#8B8B8B";

    let selectedType = 0;
    let clickedIndex = 0;

    let firstGroupSize = document.querySelectorAll('.buttonGroup:nth-child(1) .circleButton').length;
    let secondGroupSize = document.querySelectorAll('.buttonGroup:nth-child(2) .circleButton').length;


    function setContentVisible(index) {
        contentSections[index].style.display = "flex";
        contentSections[index].style.visibility = "visible";
        setTimeout(() => contentSections[index].style.opacity = "1", 0);  
    }

    function setContentHidden(index) {
        contentSections[index].style.display = "none";
        contentSections[index].style.visibility = "hidden";
        contentSections[index].style.opacity = "0";
    }

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

                circleButtons[clickedIndex].style.opacity = 0.5;
                setContentHidden(clickedIndex);

                circleButtonGroups[selectedType].style.display = "none";
                circleButtonGroups[i].style.display = "flex";

                if (i == 0) {   // 메인
                    circleButtons[0].style.opacity = 1;
                    setContentVisible(0);
                    clickedIndex = 0;
                } else if (i == 1) {    // 서브
                    circleButtons[firstGroupSize].style.opacity = 1;
                    setContentVisible(firstGroupSize);
                    clickedIndex = firstGroupSize;
                }

                selectedType = i;
            }
        });
    }

    function handleLeftArrowClick() {
        let nextIndex = clickedIndex - 1;
        if (selectedType == 0) {
            if (nextIndex < 0) nextIndex = firstGroupSize - 1;
        } else if (selectedType == 1) {
            if (nextIndex < firstGroupSize) nextIndex = firstGroupSize + secondGroupSize - 1;
        }
    
        circleButtons[nextIndex].dispatchEvent(new Event("click"));
    }

    function handleRightArrowClick() {
        let nextIndex = clickedIndex + 1
        if (selectedType == 0) {
            if (nextIndex >= firstGroupSize) nextIndex = 0
        } else if (selectedType == 1) {
            if (nextIndex >= firstGroupSize + secondGroupSize) nextIndex = firstGroupSize
        }

        circleButtons[nextIndex].dispatchEvent(new Event("click"));
    }

    // arrowButton
    arrowButtons[0].addEventListener("click", handleLeftArrowClick);
    arrowButtons[1].addEventListener("click", handleRightArrowClick);

    // 키보드 화살표
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            handleLeftArrowClick();
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            handleRightArrowClick();
        }
    });

    // circleButton
    for (let i = 0; i < circleButtons.length; i++) {
        circleButtons[i].addEventListener("mouseover", function() {
            circleButtons[i].style.opacity = 1;
        });

        circleButtons[i].addEventListener("mouseout", function() {
            if (i != clickedIndex) {
                circleButtons[i].style.opacity = 0.5;
            }
        });

        circleButtons[i].addEventListener("click", function() {
            circleButtons[clickedIndex].style.opacity = 0.5;
            setContentHidden(clickedIndex);

            circleButtons[i].style.opacity = 1;
            setContentVisible(i);
            clickedIndex = i;
        });
    }
});
