$(document).ready(function () {
    // setting slide
    currentSlide = "004";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        100: [".title"],
        500: [".chart-title"],
        700: [".chart", ".chart-des"],
        900: [".y-axis"],
        950: [".x-axis"],
        1000: [".anim-bar", ".group-1"],
        1250: [".group-2"],
        1400: [".group-3"],
        1550: [".group-4"],
        1700: [".group-5"],
        1800: [".legend-box"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("005");
        }
        if (swipedir == 'right') {
             window.goToSlide("003");
        }
    });
});
