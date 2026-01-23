$(document).ready(function () {
  // setting slide
  currentSlide = "001";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  const animations = {
    100: [".ani-text-1"],
    300: [".ani-text-2"],
    600: [".ani-product"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("002");
    }
    if (swipedir == "right") {
      // disableSwipe = true;
    }
  });
});
