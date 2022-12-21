const express = require("express");

/* create express app */
const app = express();

const hostname = "localhost";
const port = 3000;

/* register view engine */
app.set("view engine", "ejs");
/* specify the views directory */
app.set("views", "./views");

/* listen http request */
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

/* mock data */
const blogs = [
  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
];

app.get("/", (req, res) => {
  // res.status(200).send('<p>Hello world from express</p>');
  /* path must be absolute or specify root to res.sendFile */
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

/* redirects */
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

/* 404 page */
/* 'use' means use this function if reach this line of code. */
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: 404 });
});
