var http = require("http");
var fs = require("fs");
var exp = require("express");
var exp_handlebars = require("express-handlebars");

var trailers = require("./trailers");

var app = express();
app.engine("handlebars", exp_handlebars({defaultlayout: "main"}));

console.log("Starting server...");

var server = http.createServer(requestHandler);

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

if (process.env.PORT) {
//	console.log("Using defined");
	server.listen(PORT);
} else {
//	console.log("Using 3000");
	server.listen(3000);
}