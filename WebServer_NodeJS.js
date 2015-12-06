var http = require('http');
var fs = require('fs');
var dispatcher = require('httpdispatcher');

const PORT = 8080;
var server;
dispatcher.setStatic('WebSite');

server = http.createServer(requestHandler);

server.listen(PORT, function(){console.log("Server listening on Port: " + PORT)})

function requestHandler(request, response){

	try{
		console.log(request.url);
		dispatcher.dispatch(request, response);
	} catch(err){
		console.log(err);
	}
}

dispatcher.onGet("/", function(req, res){
	var htmlPage = fs.readFileSync('./index.html');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(htmlPage);
	res.end();
});

dispatcher.onGet("/test", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('sample');
});

dispatcher.onGet("/image", function(req, res){
	var background = fs.readFileSync('./Original.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(background, 'binary');
})