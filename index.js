var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var filePath = path.join(__dirname, 'hack.html');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'text/html;UTF-8',
        'Content-Length': stat.size
    });

  var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
});


// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 5000);
