var path = require("path");
var fs = require("fs");
var express = require("express");
var exp_handlebars = require("express-handlebars");

var trailers = require("./trailers");

var app = express();
app.engine("handlebars", exp_handlebars({defaultlayout: "main"}));
app.set("view engine", "handlebars");

console.log("Starting express server...");

/*
app.get("/", function(req, res, err) {
	res.render("index");
});

app.get("/index.html", function(req, res, err) {
	res.render("index");
});

app.get("/style.css", function(req, res, err) {
	res.render("style");
});
*/

// var server = http.createServer(requestHandler);

/*
function handleHTML(response) {
	var data = fs.readFileSync("./index.html");
	
	response.write(data);
}

function handleCSS(response) {
	var data = fs.readFileSync("./style.css");
	
	response.write(data);
}

function requestHandler(request, response) {
//	console.log("URL: " + request.url);
	response.statusCode = 200;
	if (request.url == "/index.html") {
		response.setHeader("Content-Type", "text/html");
//		console.log("HTML");
		handleHTML(response);
	} else if (request.url == "/style.css") {
		response.setHeader("Content-Type", "text/css");
//		console.log("CSS");
		handleCSS(response);
	} else if (request.url == "/") {
		response.setHeader("Content-Type", "text/html");
//		console.log("/");
		handleHTML(response);
	}
	
	response.end();
}
*/

app.use(express.static("public"));

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