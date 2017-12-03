var modalButton = document.querySelector(".modal-button");
var modalWindow = document.querySelector(".hotel-search-form");

modalButton.addEventListener("click", function (evt) {
   if (modalWindow.classList.contains("modal-active")) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-active");
}                     else {
    evt.preventDefault();
    modalWindow.classList.add("modal-active");
}

});