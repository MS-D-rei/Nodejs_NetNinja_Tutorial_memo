const express = require("express");
const router = express.Router();
const { blog_index, blog_details, blog_create_get, blog_create_post, blog_delete } = require('../controllers/blogController')

/* pass the reference of controller function to router as callback */
router.get("/", blog_index);
router.post("/", blog_create_post);
router.get("/create", blog_create_get);
router.get("/:id", blog_details);
router.delete("/:id", blog_delete);

module.exports = router;

/* move logics below to controller file */
// router.get("/", (req, res) => {
//   Blog.find()
//     .sort({ createdAt: -1 })
//     .then((result) => {
//       res.render("index", { title: "All blogs", blogs: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.post("/", async (req, res) => {
//   // console.log(req.body); // { title: 'blog 2', snippet: 'snippet 2', body: 'content 2' }
//   const blog = new Blog(req.body);
//   try {
//     await blog.save();
//     res.redirect("/blogs");
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("/create", (req, res) => {
//   res.render("create", { title: "Create a new blog" });
// });

// router.get("/:id", async (req, res) => {
//   const blog = await Blog.findById(req.params.id);
//   try {
//     res.render("details", { blog, title: "Blog Details" });
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const blogToDelete = await Blog.findByIdAndDelete(req.params.id);
//     // in ajax request, we have to use json to redirect
//     console.log(blogToDelete);
//     res.json({ redirect: "/blogs" });
//   } catch (err) {
//     console.log(err);
//   }
// });
