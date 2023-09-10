document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.getElementsByClassName("item")
    const timelineLines = document.getElementsByClassName("line")
    const contentSections = document.getElementsByClassName("section")

    const groups = [
        [timelineItems[0], timelineItems[5], timelineLines[0], contentSections[0]],
        [timelineItems[1], timelineItems[2], timelineLines[1], contentSections[1]],
        [timelineItems[3], timelineItems[4], timelineLines[2], contentSections[2]]
    ];


    // timeline
    let clickedGroup = null;

    for (let group of groups) {
        for (let item of group) {
            // 마우스 오버 시
            item.addEventListener("mouseover", function() {
                for (let member of group) {
                    if (member.className != "section") {
                        member.style.opacity = "1";
                    }
                }
            });

            // 마우스 아웃 시 (opacity, display를 원래대로 복구. 단, 클릭된 그룹은 제외)
            item.addEventListener("mouseout", function() {
                if (clickedGroup !== group) {
                    for (let member of group) {
                        if (member.className != "section") {
                            member.style.opacity = "0.5";
                        }
                    }
                }
            });

            // 클릭 시
            item.addEventListener("click", function() {
                if (clickedGroup) {
                    for (let prevMember of clickedGroup) {
                        if (prevMember.className != "section") {
                            prevMember.style.opacity = "0.5";
                        } else {
                            prevMember.style.display = "none";
                        }
                    }
                }

                // 현재 클릭된 그룹을 저장하고 그룹의 opacity를 100%로 설정 (section은 대신에 display 조정)
                clickedGroup = group;
                for (let member of group) {
                    if (member.className != "section") {
                        member.style.opacity = "1";
                    } else {
                        member.style.display = "block";
                    }
                }
            });
        }
    }
})