$(document).on("tap click", ".nav-item", function (e) {
  e.stopPropagation();

  var slideID = $(this).attr("data-slide");

  if (typeof window.goToSlide === "function") {
    console.log("Chuyển tới slide: " + slideID);
    window.goToSlide(slideID);
  } else {
    console.error("Lỗi: Không tìm thấy hàm goToSlide");
  }
});

$(document).ready(function () {
  currentSlide = "006";
  localStorage.setItem("current-slide", currentSlide);

  if (typeof disableSwipe !== "undefined") {
    disableSwipe = false;
  }

  // 3. Animation
  const animations = {
    100: [".ani-item-1"],
    300: [".ani-item-2"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }

  if ($("#container").swipe) {
    $("#container").swipe({
      swipeRight: function (event, direction, distance, duration, fingerCount) {
        console.log("Swipe Right Detected");
        if (typeof window.goToSlide === "function") {
          window.goToSlide("001");
        }
      },
      threshold: 50,
      excludedElements: "button, input, select, textarea, .noSwipe, .nav-item",
      allowPageScroll: "vertical",
    });
  } else {
    console.log("TouchSwipe plugin not loaded");
  }
});
