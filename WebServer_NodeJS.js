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

dispatcher.onGet("/index.css", function(req, res){
	var cssPage = fs.readFileSync('./index.css');
	res.writeHead(200, {'Content-Type': 'text/css'});
	res.write(cssPage);
	res.end();
});

dispatcher.onGet("/Owner.txt", function(req, res){
	var Owner = fs.readFileSync('./Owner.txt');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(Owner);
	res.end();
});

dispatcher.onGet("/loadOwner.js", function(req, res){
	var jscript = fs.readFileSync('./loadOwner.js');
	res.writeHead(200, {'Content-Type': 'application/javascript'});
	res.write(jscript);
	res.end();
});

dispatcher.onGet("/js/jquery-1.11.0.min.js", function(req, res){
	var jscript = fs.readFileSync('./js/jquery-1.11.0.min.js');
	res.writeHead(200, {'Content-Type': 'application/javascript'});
	res.write(jscript);
	res.end();
});

dispatcher.onGet("/js/bootstrap.min.js", function(req, res){
	var jscript = fs.readFileSync('./js/bootstrap.min.js');
	res.writeHead(200, {'Content-Type': 'application/javascript'});
	res.write(jscript);
	res.end();
});

dispatcher.onGet("/captain-america.jpg", function(req , res){
	var logo = fs.readFileSync('./captain-america.jpg');
	res.writeHead(200, {'Content-Type': 'image/jpg'});
	res.end(logo, 'binary');
})

dispatcher.onGet("/logo.png", function(req, res){
	var logo = fs.readFileSync('./logo.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(logo, 'binary');
})

dispatcher.onGet("/OwnerJson.json", function(req, res){
	var json = fs.readFileSync('./OwnerJson.json');
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(json);
	res.end();
})

// dispatcher.onGet("/image", function(req, res){
// 	var background = fs.readFileSync('./Original.png');
// 	res.writeHead(200, {'Content-Type': 'image/png'});
// 	res.end(background, 'binary');
// })