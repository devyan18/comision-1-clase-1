import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { postsRouter } from "./routes/post-routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// app.use(validatePost);

app.use("/posts", postsRouter);

app.listen(4000, () => {
  console.log("server on port 4000");
});
