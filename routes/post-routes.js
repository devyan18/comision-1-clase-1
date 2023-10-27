import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlGetAllPosts,
  ctrlGetPostById,
  ctrlUpdatePost,
} from "../controllers/post-controllers.js";
import { createPostValidation } from "../validations/create-post-validations.js";

import { applyValidations } from "../middlewares/applyValidations.js";
import { findPostValidation } from "../validations/find-post-validations.js";
import { updatePostValidation } from "../validations/update-post-validations.js";

const postsRouter = Router();

postsRouter.get("/", ctrlGetAllPosts);

postsRouter.get(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlGetPostById
);

postsRouter.post("/", createPostValidation, applyValidations, ctrlCreatePost);

postsRouter.patch(
  "/:postId",
  updatePostValidation,
  applyValidations,
  ctrlUpdatePost
);

postsRouter.delete(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlDeletePost
);

export { postsRouter };
