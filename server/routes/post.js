import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  addComment,
  requestAccess,
  getPendingRequests
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.post("/:id/comment", addComment);
router.patch("/:id/requestAccess", requestAccess);
// router.patch("/:id/accessRequests/:requestId", handleAccessRequest);
router.get("/pendingRequests/:userId",getPendingRequests);

export default router;
