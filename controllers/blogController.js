const Blog = require("../models/Blog");

const blog_index = async (req, res) => {
  try {
    const allBlog = await Blog.find().sort({ createdAt: -1 });
    res.render("./blogs/index", { title: "All blogs", blogs: allBlog });
  } catch (err) {
    console.log(err);
  }
};

const blog_details = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("./blogs/details", { title: "Blog Details", blog });
  } catch (err) {
    console.log(err);
    res.status(404).render("404", { title: "Blog not found" });
  }
};

const blog_create_get = (req, res) => {
  res.render("./blogs/create", { title: "Create a new blog" });
};

const blog_create_post = async (req, res) => {
  // console.log(req.body); // { title: 'blog 2', snippet: 'snippet 2', body: 'content 2' }
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
};

const blog_delete = async (req, res) => {
  try {
    const blogToDelete = await Blog.findByIdAndDelete(req.params.id);
    console.log(blogToDelete);
    /*{
      _id: new ObjectId("63a41ad82374b67a5c231745"),
      title: 'New Blog 3',
      snippet: 'snippet 2',
      body: 'content 3',
      createdAt: 2022-12-22T08:52:40.516Z,
      updatedAt: 2022-12-22T08:52:40.516Z,
      __v: 0
    }*/
    res.json({ redirect: "/blogs" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
