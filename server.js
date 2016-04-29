var http = require('http');
var colors = require('colors');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello World</h1>');
}).listen('8888', function(){
	console.log('create server!!'.green);
});