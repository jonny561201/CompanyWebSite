var http = require('http');
var fs = require('fs');
var path = require('path');
var dispatcher = require('httpdispatcher');

const PORT = 8080;
var server;
var fileName;
var validExtensions = {
	".html":"text/html",
	".png":"image/png",
	".jpg":"image/jpg",
	".js":"application/javascript",
	".otf":"font/opentype",
	".css":"text/css",
	".txt":"text/plain",
	".json":"application/json"
};

dispatcher.setStatic('WebSite');

server = http.createServer(requestHandler);

server.listen(PORT, function(){console.log("Server listening on Port: " + PORT)})

function requestHandler(request, response){

	try{
		fileName = request.url;
		console.log(request.url);
		if (fileName == "/") {
			fileName = "/index.html"
		}

		var ext = path.extname(fileName);
		var isValidExtension = validExtensions[ext];
		
		var loadImage = fs.readFileSync("." + fileName);
		response.writeHead(200, {"Content-Type":isValidExtension});
		response.end(loadImage, 'binary');
	} catch(err){
		console.log(err);
	}
}