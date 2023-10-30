import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user-controllers.js";

const usersRouter = Router();

usersRouter.post("/register", ctrlCreateUser);
usersRouter.post("/login", ctrlLoginUser);

export { usersRouter };
