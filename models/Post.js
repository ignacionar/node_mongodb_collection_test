import mongoose from "mongoose";

// PRIVATE
const postSchema = mongoose.Schema({
  title: String,
  desc: String,
})

// PUBLIC
const Post = mongoose.model('Post', postSchema);

export default Post;