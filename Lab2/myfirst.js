var http = require('http');
var myCal =require('./Calculation');
http.createServer(function (require, response ){
response.writeHead('200', {'Content-type':'text/html'});
var tong = myCal.toTal(7, 9);
response.end('Hello World!' + tong);
}).listen(8081);