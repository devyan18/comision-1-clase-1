import { userModel, loginUser } from "../models/user-model.js";
import jwt from "jsonwebtoken";

export function ctrlGetUserById(req, res) {
  const { userId } = req.params;

  const user = userModel.findOne({ id: userId });

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
}

export async function ctrlCreateUser(req, res) {
  const { name, email, password } = req.body;

  const user = await userModel.create({ name, email, password });

  res.status(201).json(user);
}

export async function ctrlLoginUser(req, res) {
  const { email, password } = req.body;

  const user = await loginUser({ email, password });

  if (!user) return res.sendStatus(404);

  const token = jwt.sign({ userId: user.id }, "secret"); // TODO: use env variable

  res.status(200).json({ token });
}
