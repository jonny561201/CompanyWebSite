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

dispatcher.onGet("/Sky-Blue-Sky.jpg", function(req , res){
	var backImg = fs.readFileSync('./Sky-Blue-Sky.jpg');
	res.writeHead(200, {'Content-Type': 'image/jpg'});
	res.end(backImg, 'binary');
});

dispatcher.onGet("/lineBreaks.png", function(req , res){
	var backImg = fs.readFileSync('./lineBreaks.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(backImg, 'binary');
});

dispatcher.onGet("/logo.png", function(req, res){
	var logo = fs.readFileSync('./logo.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(logo, 'binary');
});

dispatcher.onGet("/CEO-Photo.png", function(req, res){
	var ceoImg = fs.readFileSync('./CEO-Photo.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(ceoImg, 'binary');
});

dispatcher.onGet("/linkedin_icon.png", function(req, res){
	var linkedInImg = fs.readFileSync('./linkedin_icon.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(linkedInImg, 'binary');
});

dispatcher.onGet("/email_icon.png", function(req, res){
	var mailImg = fs.readFileSync('./email_icon.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(mailImg, 'binary');
});

dispatcher.onGet("/github_icon.png", function(req, res){
	var githubImg = fs.readFileSync('./github_icon.png');
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(githubImg, 'binary');
});

dispatcher.onGet("/Condiment-Regular.otf", function(req, res){
	var font = fs.readFileSync('./Condiment-Regular.otf');
	res.writeHead(200, {'Content-Type': 'font/opentype'});
	res.end(font, 'binary');
});

dispatcher.onGet("/OwnerJson.json", function(req, res){
	var json = fs.readFileSync('./OwnerJson.json');
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(json);
	res.end();
});

// dispatcher.onGet("/image", function(req, res){
// 	var background = fs.readFileSync('./Original.png');
// 	res.writeHead(200, {'Content-Type': 'image/png'});
// 	res.end(background, 'binary');
// })