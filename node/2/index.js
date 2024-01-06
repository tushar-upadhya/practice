const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the OVERVIEW page");
  } else if (pathName === "/product") {
    res.end("this is the Product page");
  } else {
    res,
      fs.writeHead(404, {
        "Content-type": "text/html",
      });
    res.end("<h1>page not found</h1>");
  }

  //   res.end("hello world");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listening on port");
});
