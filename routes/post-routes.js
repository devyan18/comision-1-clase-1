import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlGetAllPosts,
} from "../controllers/post-controllers.js";

const postsRouter = Router();

postsRouter.get("/", ctrlGetAllPosts);
postsRouter.post("/", ctrlCreatePost);

export { postsRouter };
