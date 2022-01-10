import { Router } from "express";
import { createPost, getPost } from "../controllers/Posts.js";

const router = Router();

router.get('/', getPost).post('/', createPost);

export { router as PostRouter }