import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/Blogs.js";

const router = express.Router();

//these are my routes
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
