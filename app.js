import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fileUpload from "express-fileupload";

import nodemailer from "nodemailer";

import { env } from "./settings/envs.js";

import { postsRouter } from "./routes/post-routes.js";
import { usersRouter } from "./routes/user-routes.js";
import { authValidation } from "./middlewares/authValidation.js";
import * as url from "url";

import path from "node:path";

const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// middlewares
app.use(express.json()); // el body de las peticiones normales
app.use(express.urlencoded({ extended: true })); // con formularios
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

// app.use(validatePost);

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "example@gmail.com", // TODO: cambiar por su correo electrónico. Y en variables de entorno
    pass: env.GMAIL_PASSWORD, // TODO: cambiar por la contraseña generada para la aplicación. Y en variables de entorno
  },
});

app.post("/upload", async (req, res) => {
  const file = req.files.image;

  await file.mv(path.join(__dirname, "uploads", file.name));

  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  const info = await transporter.sendMail({
    from: "example@gmail.com",
    to: email,
    subject: subject,
    text: message,
  });

  console.log(info);

  res.send("email sent");
});

app.use("/posts", authValidation, postsRouter);
app.use("/users", usersRouter);

app.listen(env.PORT, () => {
  console.log(`server on port ${env.PORT}`);
});
