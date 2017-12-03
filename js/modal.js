var modalButton = document.querySelector(".modal-button");
var modalWindow = document.querySelector(".hotel-search-form");
var buttonSearch = document.querySelector(".button-search");

var checkIn = modalWindow.querySelector("#check-in");
var checkOut = modalWindow.querySelector("#check-out");
var fullAge = modalWindow.querySelector("#full-age");
var child  = modalWindow.querySelector("#child");

modalButton.addEventListener("click", function (evt) {
   if (modalWindow.classList.contains("modal-active")) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-active");
    modalWindow.classList.remove("value-error");
}  else {
    evt.preventDefault();
    modalWindow.classList.add("modal-active");
}

});

buttonSearch.addEventListener("click", function (evt) {
    if (!checkIn.value || !checkOut.value || !fullAge.value || !child.value) {
        evt.preventDefault();
        modalWindow.classList.remove("value-error");
        modalWindow.offsetWidth = modalWindow.offsetWidth;
        modalWindow.classList.add("value-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modalWindow.classList.contains("modal-active")) {
        modalWindow.classList.add("modal-active");
      }
} });