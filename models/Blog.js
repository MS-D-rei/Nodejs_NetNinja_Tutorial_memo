const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// console.log(Schema);

/* create schema */
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

/* compiling schema into model */
/* A model is a class with which we construct documents */
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;
