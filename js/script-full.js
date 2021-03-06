var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});
