let route = (handle, pathName, response) => {
  console.log("About to route request for " + pathName);
  if (typeof handle[pathName] === "function") {
    handle[pathName](response);
  } else {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
  }
};

exports.route = route;
