const express = require("express");

/* create express app */
const app = express();

const hostname = "localhost";
const port = 3000;

/* listen http request */
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  // res.status(200).send('<p>Hello world from express</p>');
  /* path must be absolute or specify root to res.sendFile */
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

/* redirects */
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

/* 404 page */
/* 'use' means use this function if reach this line of code. */
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
