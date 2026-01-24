$(document).ready(function () {
    // setting slide
    currentSlide = "002";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [""],
        500: [""],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
        }
    });
});

const MAX_Y = 80;
const AXIS_HEIGHT = 36;

$(".col-bar").each(function (i) {
    const value = Number($(this).data("value"));

    const safeValue = Math.min(value, MAX_Y);

    const heightVH = (safeValue / MAX_Y) * AXIS_HEIGHT;

    this.style.setProperty("--h", heightVH + "vh");

    setTimeout(() => {
        this.classList.add("show");
    }, 300 + i * 120);
});

const refContainer = document.querySelector(".ref-container");
const refIcon = document.getElementById("ref");
const refPopup = document.getElementById("ref-popup");
const popupClose = document.querySelector(".popup-close");

refContainer.addEventListener("click", function () {
    refIcon.classList.add("active");
    refPopup.classList.add("show");
});

function closeRefPopup() {
    refPopup.classList.remove("show");
    refIcon.classList.remove("active");
}
popupClose.addEventListener("click", closeRefPopup);

refPopup.addEventListener("click", function (e) {
    if (e.target === this) {
        closeRefPopup();
    }
});
