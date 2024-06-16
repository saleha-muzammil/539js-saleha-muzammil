document.addEventListener("DOMContentLoaded", function() {
  var figures = document.querySelectorAll("figure");
  figures.forEach(function(figure) {
    figure.classList.add("one-third");
  });

  var footer = document.querySelector("footer");
  footer.addEventListener("click", function() {
    footer.style.display = "none";
  });

  var fifthFigure = document.querySelectorAll("figure")[4];
  fifthFigure.addEventListener("dblclick", function() {
    fifthFigure.style.display = "none";
  });

  var firstFigureCaption = document.querySelector("figure:first-child figcaption");
  var originalFont = "";
  firstFigureCaption.addEventListener("mouseover", function() {
    originalFont = window.getComputedStyle(firstFigureCaption).fontFamily;
    firstFigureCaption.style.fontFamily = "cursive";
  });
  firstFigureCaption.addEventListener("mouseleave", function() {
    firstFigureCaption.style.fontFamily = originalFont;
  });

  firstFigureCaption.addEventListener("focus", function() {
    originalFont = window.getComputedStyle(firstFigureCaption).fontFamily;
    firstFigureCaption.style.fontFamily = "cursive";
  });
  firstFigureCaption.addEventListener("blur", function() {
    firstFigureCaption.style.fontFamily = originalFont;
  });
});
