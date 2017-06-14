var add_trailer_button = document.querySelector("#add-trailer-button");
add_trailer_button.addEventListener("click", function() {
    var modal_backdrop = document.querySelector("#modal-backdrop");
    var modal = document.querySelector("#add-trailer-modal");

    modal_backdrop.remove("hidden");
    modal.remove("hidden");
});