import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlGetUserById,
  ctrlLoginUser,
} from "../controllers/user-controllers.js";

const usersRouter = Router();

usersRouter.post("/register", ctrlCreateUser);
usersRouter.post("/login", ctrlLoginUser);
usersRouter.get("/:userId", ctrlGetUserById);

export { usersRouter };
