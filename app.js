import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./settings/envs.js";

import { postsRouter } from "./routes/post-routes.js";
import { usersRouter } from "./routes/user-routes.js";
import { authValidation } from "./middlewares/authValidation.js";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// app.use(validatePost);

app.use("/posts", authValidation, postsRouter);
app.use("/users", usersRouter);

app.listen(env.PORT, () => {
  console.log(`server on port ${env.PORT}`);
});
