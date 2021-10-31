import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blogs.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//these are my routes 
router.get("/blogs", getPosts);
router.get("/blogs/:id", getPost);


router.post("/blogs", auth, createPost);
router.patch("/blogs/:id", auth, updatePost);
router.delete("/blogs/:id", auth, deletePost);

export default router;
