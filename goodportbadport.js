// require/import the http module
var http = require('http');

// listen for a port
var port = 8080;

// need a function which handles request and send response
function handleRequest(request, response){
	response.end('It works!!! Path Hit: ' + request.url);
}

// create a server
var server = http.createServer(handleRequest);

// let us start our server
server.listen(port, function(){
	// callback is triggered when server is successfully listening
	console.log('Server listening on: http://localhost:' + port);
});	