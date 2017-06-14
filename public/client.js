var add_trailer_button = document.querySelector("#add-trailer-button");
add_trailer_button.addEventListener("click", function() {
    console.log("Event listener for unhiding modal...");
    var modal_backdrop = document.querySelector("#modal-backdrop");
    var modal = document.querySelector("#add-trailer-modal");

    modal_backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
});

function close_modal() {
	var trailer_title = document.querySelector('#trailer-title');
	trailer_title.value = "";
	
	var trailer_url = document.querySelector('#trailer-url');
	trailer_url.value = "";
	
	var modal_backdrop = document.querySelector('#modal-backdrop');
	modal_backdrop.classList.add('hidden');
	
	var add_trailer_modal = document.querySelector('#add-trailer-modal');
	add_trailer_modal.classList.add('hidden');
}

var modal_close_button = document.querySelector('.modal-close-button');
modal_close_button.addEventListener('click', close_modal);
var modal_cancel_button = document.querySelector('.modal-cancel-button');
modal_cancel_button.addEventListener('click', close_modal);

var modal_accept_button = document.querySelector('.modal-accept-button');
modal_accept_button.addEventListener('click', function (event) {
    console.log("Event listener for adding trailers...");
	var trailer_title = document.querySelector('#trailer-title');
	var trailer_url = document.querySelector('#trailer-url');
    console.log("Title: ", trailer_title);
	
	if (!trailer_title.value || !trailer_url.value) {
		alert("Please fill out all fields.");
		return;
	}
	
	var post_url = "/trailers/addTrailer";

    var request = new XMLHttpRequest();
    request.open("POST", post_url);
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("load", function(event) {
        var error;
        if (event.target.status !== 200) {
            error = event.target.response;
        }
        callback(error);
    });

    var post_body = {
        title: trailer_title.value,
        url: trailer_url.value
    };
    request.send(JSON.stringify(post_body));
	
	close_modal();
});