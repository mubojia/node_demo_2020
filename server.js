let http = require("http");
let url = require("url");

let start = (route, handle) => {
  let onRequest = (request, response) => {
    let pathName = url.parse(request.url).pathname;
    if (pathName == "/favicon.ico") {
      return response.end();
    }

    route(handle, pathName, response);

    console.log("Request for " + pathName + " received.");
  };

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
};

exports.start = start;
