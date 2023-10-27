import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlGetAllPosts,
} from "../controllers/post-controllers.js";

const postsRouter = Router();

postsRouter.get("/", ctrlGetAllPosts);
postsRouter.post("/", ctrlCreatePost);
postsRouter.patch("/", ctrlCreatePost);
postsRouter.delete("/", ctrlCreatePost);

export { postsRouter };
