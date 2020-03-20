let route = (handle, pathname, response, request) => {
  console.log("About to route request for " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response, request);
  } else {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
  }
};

exports.route = route;
