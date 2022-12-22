const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

/* create express app */
const app = express();

const hostname = "localhost";
const port = 3000;

/* connect mongoDB with mongoose */
const mongoDBUrl = require("./mongoDB");
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoDBUrl)
  .then((result) => {
    console.log("mongoDB connected");
    /* listen http request */
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

/* register view engine */
app.set("view engine", "ejs");
/* specify the views directory */
app.set("views", "./views");
/* specify the directory for static files. ex. image */
app.use(express.static("public"));
/* to get req.body */
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("new request mode");
  console.log(`host: ${req.hostname}`);
  console.log(`path: ${req.path}`);
  console.log(`method: ${req.method}`);
  next();
});

/* mock data */
const blogs = require("./docs/blogs.json");

app.get("/", (req, res) => {
  // res.status(200).send('<p>Hello world from express</p>');
  /* path must be absolute or specify root to res.sendFile */
  // res.sendFile("./views/index.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", async (req, res) => {
  // console.log(req.body); // { title: 'blog 2', snippet: 'snippet 2', body: 'content 2' }
  const blog = new Blog(req.body);
  // blog
  //   .save()
  //   .then((result) => res.redirect("/blogs"))
  //   .catch((err) => {
  //     console.log(err);
  //   });
  try {
    await blog.save();
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  try {
    res.render("details", { blog, title: "Blog Details" });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    const blogToDelete = await Blog.findByIdAndDelete(req.params.id);
    // in ajax request, we have to use json to redirect
    res.json({ redirect: "/blogs" });
  } catch (err) {
    console.log(err);
  }
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
