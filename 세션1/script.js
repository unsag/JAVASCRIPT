window.addEventListener("scroll", function () {
  var currentPosition =
    window.pageY0ffset || document.documentElement.scrollTop;

  if (currentPosition >= 500) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    console.log("스크롤 위치가 500px 이상이 아닙니다.");
  }
});
