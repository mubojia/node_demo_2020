let http = require("http"),
    url = require('url');

let start = (route) => {
    let onRequest = (request, response) => {
        let pathName = url.parse(request.url).pathname;
        if(pathName == '/favicon.ico'){
            return response.end();
        }

        route(pathName);

        console.log("Request for " + pathName + " received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;