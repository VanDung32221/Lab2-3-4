var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    response.writeHead('200', {'Content-Type': 'text/html'});

    var url = request.url;

    if (url == '/') {
        fs.readFile('index.html', function (error, data) {
            if (error != null) {
                response.end(error);
            } else {
                response.write(data);
                response.end();
            }

        });

    } else if (url == '/show') {
        fs.readFile('thongtinsv.txt', 'hello', function (error) {
            if (error != null) {
                response.end(error);

            } else {

                response.end('show file thanh cong');
            }

        });


    } else if (url == '/create') {
        fs.writeFile('thongtin.txt', 'doan van dung - PH09920', function (error) {
            if (error != null) {
                response.end(error);

            } else {

                response.end('tao file thanh cong');
            }
        });
    } else if (url == '/append') {
        fs.appendFile('thongtin.txt', '-PT15354', function (error) {
            if (error != null) {
                response.end(error);

            } else {

                response.end('them du lieu thanh cong');
            }
        });

    } else if (url == '/unlink') {
        fs.unlink('thongtin.txt', function (error) {
            if (error != null) {
                response.end(error);

            } else {

                response.end('xoa file thanh cong');
            }
        });
    }
    else if (url == '/rename') {
        fs.rename('thongtin.txt', 'thongtinsv.txt', function (error) {
            if (error != null) {
                response.end(error);
            } else {
                response.end('Doi Ten File Thanh Cong')
            }
        });

    }
    else {
        response.end('Not Found 404');
    }


}).listen(8881);