var path = require("path");
var fs = require("fs");
var express = require("express");
var exp_handlebars = require("express-handlebars");
var bodyParser = require('body-parser');

var trailers = require("./trailers");

var app = express();
app.engine("handlebars", exp_handlebars({defaultlayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.json());

console.log("Starting express server...");

/*
app.get("/", function(req, res, err) {
	var args = {
		trailer: trailers
	};

	res.render("trailersPage", args);
});
*/

app.get("/trailers", function(req, res, err) {
	var args = {
		trailer: trailers
	};

	res.render("trailersPage", args);
});

app.post("/trailers/addTrailer", function(req, res, err) {
	console.log("Adding trailer...");
	var new_trailer = {
		title: req.body.title,
		url: req.body.url
//		tags: req.body.tags
	};
//	console.log("Title: ", req.body.title);
	trailers[new_trailer.title] = new_trailer;

	fs.writeFile("trailers.json", JSON.stringify(trailers), function(err) {
		if (err) {
			res.status(500).send("Unable to write new trailer.");
		} else {
			res.status(200).send();
		}
	});
});

/*
app.post("/trailers/removeTrailer", function(req, res, err) {
	console.log("Removing trailer...");
	var gone_trailer = req.body.title;
//	console.log("Title: ", req.body.title);
	delete trailers[gone_trailer.title];

	fs.writeFile("trailers.json", JSON.stringify(trailers), function(err) {
		if (err) {
			res.status(500).send("Unable to write to trailers.");
		} else {
			res.status(200).send();
		}
	});
});
*/

/*
app.post("trailers/search", function(req, res, err) {
	console.log("Searching trailers...");
	var response_json = {};
	for (var key in trailers) {
		tags_str = stringify(key.tags);
		if (key.title.search(req.body.value) !== -1 || tags_str.search(req.body.value)) {
			response_json[key.title] = key;
		}
	}

	response.send(response_json);
});
*/

// Lets any request for localhost:3000 get the files in public/
app.use(express.static("public"));

// Default to index.html
app.use(function(req, res) {
	res.send("public/index.html");
});


if (process.env.PORT) {
//	console.log("Using defined");
	app.listen(PORT);
} else {
//	console.log("Using 3000");
	app.listen(3000);
}