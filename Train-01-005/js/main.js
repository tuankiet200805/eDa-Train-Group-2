$(document).ready(function () {
  // setting slide
  currentSlide = "005";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  //animation, if have serveral class with the same time appear, delcare in an array
  const animations = {
    300: [".ani-item-1"],
    500: [".ani-item-2"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("006");
    }
    if (swipedir == "right") {
      window.goToSlide("004");
    }
  });
});
