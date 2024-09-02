document.querySelector(".leftButton").addEventListener("click", function () {
    const vw = window.innerWidth * 0.2;
    window.scrollBy({
        left: -vw,
        behavior: 'smooth'
    });
})


document.querySelector(".rightButton").addEventListener("click", function () {
    const vw = window.innerWidth * 0.2009;
    window.scrollBy({
        left: vw,
        behavior: 'smooth'
    });
})


let autoCounter = 0;
let direction = 1

setInterval(() => {
    if (direction === 1) {
        document.querySelector(".rightButton").click();
        autoCounter++;
        if (autoCounter >= 4) {
            direction = -1;
        }
    } else {
        document.querySelector(".leftButton").click();
        autoCounter--;
        if (autoCounter <= 0) {
            direction = 1;
            autoCounter = 0;
        }
    }
}, 5000)

const circles = document.querySelectorAll(".circle");

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollX;
    const viewportWidth = window.innerWidth;

    if (scrollPosition >= viewportWidth * 0 && scrollPosition < viewportWidth * 0.2) {
        circles.forEach((circle, index) => {
            if (index === 0) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    } else if (scrollPosition >= viewportWidth * 0.15 && scrollPosition < viewportWidth * 0.4) {
        circles.forEach((circle, index) => {
            if (index === 1) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    } else if (scrollPosition >= viewportWidth * 0.4 && scrollPosition < viewportWidth * 0.6) {
        circles.forEach((circle, index) => {
            if (index === 2) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    } else if (scrollPosition >= viewportWidth * 0.6 && scrollPosition < viewportWidth * 0.8) {
        circles.forEach((circle, index) => {
            if (index === 3) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    } else if (scrollPosition >= viewportWidth * 0.8 && scrollPosition < viewportWidth * 1.0) {
        circles.forEach((circle, index) => {
            if (index === 4) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    } else if (scrollPosition >= viewportWidth * 1.0 && scrollPosition <= viewportWidth * 1.8) {
        circles.forEach((circle) => {
            circle.classList.remove("active");
        });
    }
});

circles.forEach((circle, index) => {
    circle.addEventListener("click", function () {
        if (index == 0) {
            window.scrollTo(0, 0);
        }
        if (index == 1) {
            window.scrollTo(window.innerWidth * 0.2009, 0);
        }
        if (index == 2) {
            window.scrollTo(window.innerWidth * 0.4009, 0);
        }
        if (index == 3) {
            window.scrollTo(window.innerWidth * 0.6009, 0);
        }
        if (index == 4) {
            window.scrollTo(window.innerWidth * 0.8009, 0);
        }
    })
})

// window.addEventListener('scroll', function () {
//     const scrollPosition = window.scrollX;
//     const viewportWidth = window.innerWidth;
//     const scrollThreshold = viewportWidth * 0.2; // 20vw

//     if (scrollPosition >= viewportWidth * 0 && scrollPosition < viewportWidth * 0.2) {
//         console.log("pic 1")

//     } else if (scrollPosition >= viewportWidth * 0.2 && scrollPosition < viewportWidth * 0.4) {
//         console.log("pic 2")
//     } else if (scrollPosition >= viewportWidth * 0.4 && scrollPosition < viewportWidth * 0.6) {
//         console.log("pic 3")
//     } else if (scrollPosition >= viewportWidth * 0.6 && scrollPosition < viewportWidth * 0.8) {
//         console.log("pic 4")
//     } else if (scrollPosition >= viewportWidth * 0.8 && scrollPosition < viewportWidth * 1.0) {
//         console.log("pic 5")
//     } else if (scrollPosition >= viewportWidth * 1.0 && scrollPosition <= viewportWidth * 1.8) {
//         console.log("none")
//     }
// });
