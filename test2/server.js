let http = require("http");
let url = require("url");

let start = (route, handle) => {
    let onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;
        if (pathname == "/favicon.ico") {
            return response.end();
        }

        console.log("Request for " + pathname + " received.");

        let postData = "";
        request.setEncoding("utf8");

        request.addListener("data", (postDataChunk) => {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });

        request.addListener("end", () => {
            route(handle, pathname, response, postData);
        });
    };

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
};

exports.start = start;
