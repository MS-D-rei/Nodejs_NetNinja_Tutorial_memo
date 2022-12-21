const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(req.url); // /
  // console.log(req.method); // GET
  // console.log(req.headers);

  /* set headers content type */
  res.setHeader("Content-Type", "text/html");
  /* writing one by one is cumbersome */
  // res.write('Hello, world\n');
  // res.write('<p>Hello again</p>');
  // res.end();

  let path = "../../views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.setHeader('Location', '/about');
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  /* send html file */
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    // res.write(data);
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`listening for requests on port: ${port}`);
});
