$(document).on("tap click", ".btn-toggle", function (e) {
  e.preventDefault();
  e.stopPropagation();

  $(this).closest(".item-group").toggleClass("active");
});

$(document).ready(function () {
  currentSlide = "003";
  localStorage.setItem("current-slide", currentSlide);

  if (typeof disableSwipe !== "undefined") {
    disableSwipe = false;
  }

  const animations = {
    100: [".ani-item-1"],
    300: [".ani-item-2"],
    500: [".ani-item-3"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }

  if ($("#container").swipe) {
    $("#container").swipe({
      swipeLeft: function (event, direction, distance, duration, fingerCount) {
        console.log("Next Slide (004)");
        if (typeof window.goToSlide === "function") window.goToSlide("004");
      },
      swipeRight: function (event, direction, distance, duration, fingerCount) {
        console.log("Prev Slide (002)");
        if (typeof window.goToSlide === "function") window.goToSlide("002");
      },
      threshold: 50,
      excludedElements:
        "button, input, select, textarea, .noSwipe, .btn-toggle",
      allowPageScroll: "vertical",
    });
  } else {
    var el = document.getElementById("container");
    if (el && typeof swipedetect === "function") {
      swipedetect(el, function (swipedir) {
        if (swipedir == "left") window.goToSlide("004");
        if (swipedir == "right") window.goToSlide("002");
      });
    }
  }
});
