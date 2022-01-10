import Post from "../models/Post.js";

export const getPost = async (req, res) => {
  const posts = await Post.find() //ALL
  res.status(200).json({ message: 'All posts', data: posts })
  
}

export const createPost = async (req, res) => {
  const { title, desc } = req.body;

  const newPost = await Post.create({ title, desc })

  res.status(200).json({ message: 'Successfully created post', data: newPost });
}