window.onload = function () {

/*
var add_trailer_button = document.querySelector("add-trailer-button");
    add_trailer_button.addEventListener("click", function() {
    var modal_backdrop = document.querySelector("#modal-backdrop");
    var modal = document.querySelector("#add-trailer-modal");

    modal_backdrop.remove("hidden");
    modal.remove("hidden");
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

var trailerary = document.getElementsByClassName("trailer")
var searchbutton = document.getElementById("navbar-search-button")
function searchs(){
  for(var i = 0; i < trailerary.length; i++){
    var title = document.getElementsByClassName("trailerInfoItem trailer-title")[i].textContent;
    var tags = document.getElementsByClassName("trailerInfoItem trailer-tags")[i].textContent;
    if(title.search(searchbar.value) === -1 && tags.search(searchbar.value) === -1){
      trailerary[i].style.display = 'none';
    }
  }
}
searchbutton.addEventListener('click', searchs);

var modal_accept_button = document.querySelector('.modal-accept-button');
modal_accept_button.addEventListener('click', function (event) {
  var trailer_title = document.querySelector('#trailer-title');
  var trailer_url = document.querySelector('#trailer-url');

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
    title: trailer_title,
    url: trailer_url
  };
  request.send(JSON.stringify(post_body));

	close_modal();
});
*/

var trailerClick = document.getElementsByClassName('trailer-info');

var searchButton = document.getElementById("navbar-search-button");

console.log(searchButton);

searchButton.addEventListener('click', function(event) {
    alert("Whoop.");
});

console.log(trailerClick);

/*
trailerClick.addEventListener('click', function (event) {
          alert("Whoop.");
        });
*/

};